import Stripe from "stripe";

if (!process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY) {
  throw new Error(
    "STRIPE_SECRET_KEY is not set in environment variables. Please check your .env.local file."
  );
}

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: "2025-04-30.basil",
  typescript: true,
});

// Subscription plans configuration
export const SUBSCRIPTION_PLANS = {
  BASIC: {
    id: "basic",
    name: "Basic Plan",
    description: "Perfect for small farms",
    price: 29,
    priceId: "price_1NEXAMPLEBASIC", // Example Stripe price ID
    features: [
      "Voice Assistant (100 queries/month)",
      "Basic Weather Insights",
      "Crop Monitoring (5 fields)",
      "Email Support",
    ],
  },
  PRO: {
    id: "pro",
    name: "Pro Plan",
    description: "Ideal for medium-sized operations",
    price: 79,
    priceId: "price_1RS1qiHldUksame0gDOfu7WL", // Example Stripe price ID
    features: [
      "Voice Assistant (Unlimited)",
      "Advanced AI Crop Analysis",
      "Smart Irrigation Recommendations",
      "Market Price Alerts",
      "Crop Monitoring (25 fields)",
      "Priority Support",
    ],
  },
  ENTERPRISE: {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "For large farming operations",
    price: 199,
    priceId: "price_1NEXAMPLEENTERPRISE", // Example Stripe price ID
    features: [
      "Everything in Pro",
      "Custom AI Models",
      "Unlimited Field Monitoring",
      "Expert Consultation",
      "API Access",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
  },
};

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS;
