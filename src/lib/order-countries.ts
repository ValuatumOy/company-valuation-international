// Countries with automatic online orders. Shared by server routes and the client order form.
export const orderCountries = {
  DK: {
    slug: "denmark", adjective: "Danish", name: "Denmark", idName: "CVR number", idShort: "CVR", idHint: "eight-digit CVR number",
    businessId: /^\d{8}$/, sourceCode: /^\d{8}K?$/, currencies: ["DKK", "EUR"], flag: "DANISH_ORDERS_ENABLED",
    readinessTimeout: 60000, checking: "Checking company data…", back: { href: "/solutions/danish-company-valuation", label: "Danish company valuation" },
  },
  SE: {
    slug: "sweden", adjective: "Swedish", name: "Sweden", idName: "organisation number", idShort: "Org. no.", idHint: "ten-digit organisation number",
    businessId: /^\d{6}-\d{4}$/, sourceCode: /^\d{6}-\d{4}$/, currencies: ["SEK"], flag: "SWEDISH_ORDERS_ENABLED",
    readinessTimeout: 120000, checking: "Preparing the company forecast…", back: { href: "/solutions/international-company-valuation", label: "International company valuation" },
  },
} as const;

export type OrderCountry = keyof typeof orderCountries;
export type OrderCompany = { fid: number; company_name: string; company_code: string; industry_text?: string | null };

export const isOrderCountry = (value: unknown): value is OrderCountry => typeof value === "string" && Object.hasOwn(orderCountries, value);
export const countryBySlug = (slug: string) => (Object.keys(orderCountries) as OrderCountry[]).find(country => orderCountries[country].slug === slug);
export const businessId = (companyCode: string) => companyCode.replace(/K$/, "");
export const acceptsCurrency = (country: OrderCountry, currency: unknown) => (orderCountries[country].currencies as readonly string[]).includes(String(currency));
