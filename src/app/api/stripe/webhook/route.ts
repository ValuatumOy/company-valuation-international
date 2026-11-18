import { isOrderCountry } from "@/lib/order-countries";
import { fulfilOrderSession, productTag, stripeClient } from "@/lib/orders";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const stripe = stripeClient(), secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) return Response.json({ error: "Webhook unavailable" }, { status: 503 });
  let event;
  try { event = stripe.webhooks.constructEvent(await request.text(), request.headers.get("stripe-signature") || "", secret); }
  catch { return Response.json({ error: "Invalid signature" }, { status: 400 }); }
  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    const session = event.data.object;
    if (session.metadata?.product === productTag && isOrderCountry(session.metadata.country) && session.payment_status === "paid") {
      try { await fulfilOrderSession(session); }
      catch { return Response.json({ error: "Order delivery is pending; retry required" }, { status: 500 }); }
    }
  }
  return Response.json({ received: true });
}
