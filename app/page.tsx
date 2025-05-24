import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-green-200 dark:border-gray-700 sticky top-0 z-50">
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
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Smart Farming with
            <span className="text-green-600 block">AI & Voice Technology</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your farming experience with our AI-powered digital
            assistant. Get real-time crop insights, weather updates, and expert
            advice through voice commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              Get Started Free
            </Link>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              📱 Download App
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Modern Farmers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to optimize your farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voice Assistant */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Voice Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ask questions about your crops, get weather updates, and receive
                farming advice using natural voice commands.
              </p>
            </div>

            {/* AI Crop Analysis */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI Crop Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI algorithms analyze your crops for diseases, pests,
                and growth optimization recommendations.
              </p>
            </div>

            {/* Weather Insights */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🌤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Weather Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time weather data and forecasts tailored to your farm
                location for better planning.
              </p>
            </div>

            {/* Smart Irrigation */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Smart Irrigation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimize water usage with AI-driven irrigation recommendations
                based on soil moisture and weather data.
              </p>
            </div>

            {/* Market Prices */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Market Prices
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated with real-time crop prices and market trends to
                make informed selling decisions.
              </p>
            </div>

            {/* Expert Support */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with agricultural experts and get personalized advice
                for your specific farming challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Farmers with Technology
              </h2>
              <p className="text-xl mb-6">
                Our digital farmer assistance platform combines cutting-edge AI
                technology with voice recognition to make farming more
                efficient, sustainable, and profitable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  24/7 AI-powered farming assistance
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  Voice-activated commands in multiple languages
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  Real-time crop monitoring and alerts
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  Data-driven farming recommendations
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose FarmAI?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <div>
                    <h4 className="font-semibold">Increase Productivity</h4>
                    <p className="text-white/80">
                      Boost your farm's efficiency by up to 40%
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💰</span>
                  <div>
                    <h4 className="font-semibold">Reduce Costs</h4>
                    <p className="text-white/80">
                      Save on water, fertilizers, and labor costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🌱</span>
                  <div>
                    <h4 className="font-semibold">Sustainable Farming</h4>
                    <p className="text-white/80">
                      Promote eco-friendly farming practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of farmers who are already using FarmAI to optimize
            their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Start Your Free Trial
            </Link>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🌱</span>
                </div>
                <span className="text-xl font-bold">FarmAI</span>
              </div>
              <p className="text-gray-400">
                Empowering farmers with AI and voice technology for smarter,
                more sustainable agriculture.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 FarmAI. All rights reserved. Built with Next.js and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
