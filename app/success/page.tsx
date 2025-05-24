"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // In a real app, you would verify the session with your backend
      // For now, we'll just show a success message
      setLoading(false);
      setSessionData({ id: sessionId });
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Processing your subscription...
          </p>
        </div>
      </div>
    );
  }

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
          </div>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to FarmAI! 🎉
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your subscription has been successfully activated. You now have
            access to all the powerful features of FarmAI.
          </p>

          {sessionId && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Session ID:
              </p>
              <p className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                {sessionId}
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2">Download the App</h3>
                <p className="text-white/80 text-sm">
                  Get the FarmAI mobile app for iOS and Android
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎤</span>
                </div>
                <h3 className="font-semibold mb-2">Try Voice Assistant</h3>
                <p className="text-white/80 text-sm">
                  Start asking questions about your crops
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Set Up Dashboard</h3>
                <p className="text-white/80 text-sm">
                  Configure your farm profile and preferences
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Access Dashboard
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download App
            </button>
          </div>

          {/* Support */}
          <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our team is here to help you make the most of FarmAI. Reach out
              anytime!
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

          {/* Receipt */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              A receipt has been sent to your email address. You can manage your
              subscription anytime from your account dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
