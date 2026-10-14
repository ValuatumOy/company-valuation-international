import Link from "next/link";
import { Arrow } from "@/components/icon";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">Page not found</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>
        The page may have moved. Find a valuation solution or browse our guides.
      </p>
      <div className="actions">
        <Link className="button" href="/">
          Back to home <Arrow />
        </Link>
        <Link className="button button-outline" href="/resources">
          Explore resources <Arrow />
        </Link>
      </div>
    </main>
  );
}
