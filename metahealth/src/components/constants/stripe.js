const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_C6PCZX1aQWj3rgG76SUaUyam"
    : "pk_test_C6PCZX1aQWj3rgG76SUaUyam";

export default STRIPE_PUBLISHABLE;
