"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { SUBSCRIPTION_PLANS } from "@/lib/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const handleSubscribe = async (planId: string) => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setLoading(planId);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
          customerEmail: email,
        }),
      });

      const { sessionId, url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-green-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                FarmAI
              </span>
            </div>
            <a
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Select the perfect plan for your farming operation
            </p>

            {/* Email Input */}
            <div className="max-w-md mx-auto mb-12">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Enter your email to get started
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(SUBSCRIPTION_PLANS).map(([key, plan]) => {
              const isPopular = key === "PRO";

              return (
                <div
                  key={plan.id}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${
                    isPopular ? "ring-2 ring-green-500 scale-105" : ""
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                      <span className="text-lg font-normal text-gray-600 dark:text-gray-300">
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(key)}
                    disabled={loading === key || !email}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      isPopular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === key ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Get Started"
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes will be prorated.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, all plans come with a 14-day free trial. No credit card
                  required.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely. You can cancel your subscription at any time with
                  no cancellation fees.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We accept all major credit cards, debit cards, and digital
                  wallets through Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
