"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-red-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                FarmAI
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Cancel Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cancel Icon */}
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Subscription Cancelled
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            No worries! Your subscription process was cancelled and no charges
            were made to your account.
          </p>

          {/* Why Users Cancel */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Still Interested in FarmAI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  🤔 Have Questions?
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• How does the AI voice assistant work?</li>
                  <li>• What crops and regions are supported?</li>
                  <li>• Can I try it before subscribing?</li>
                  <li>• What's included in each plan?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  💡 Need More Info?
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Watch product demo videos</li>
                  <li>• Read customer success stories</li>
                  <li>• Compare plan features</li>
                  <li>• Schedule a personal demo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">
              🎁 Special Offer Just for You!
            </h2>
            <p className="text-xl mb-6">
              Get 30% off your first month when you subscribe within the next 24
              hours
            </p>
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <p className="text-2xl font-bold">
                Use code:{" "}
                <span className="bg-white text-green-600 px-3 py-1 rounded font-mono">
                  WELCOME30
                </span>
              </p>
            </div>
            <p className="text-white/80">
              This exclusive offer expires in 24 hours and won't be available
              again.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/pricing"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Try Again with Discount
            </Link>
            <Link
              href="/"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Alternative Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📹</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Watch Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                See FarmAI in action with our 5-minute product demo
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Watch Now →
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Talk to Expert
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Schedule a free consultation with our farming experts
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                Schedule Call →
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Free Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Access our free farming guides and AI tips
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                Browse Resources →
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our support team is here to help you understand how FarmAI can
              benefit your farming operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@farmai.com"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                📧 support@farmai.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                📞 +1 (234) 567-8900
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                💬 Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
