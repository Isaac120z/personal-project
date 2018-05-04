const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_test_iTsqlbl5wJUZgGrfpMBHDdsz"
    : "sk_test_iTsqlbl5wJUZgGrfpMBHDdsz";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
