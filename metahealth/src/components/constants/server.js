const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://meta-health.fun"
    : "http://www.meta-health.fun";

export default PAYMENT_SERVER_URL;
