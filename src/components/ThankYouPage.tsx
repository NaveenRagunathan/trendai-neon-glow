
import React from 'react';
import { CheckCircle, Mail, Sparkles } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark to-gray-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-neon/20 to-coral/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-mustard/20 to-neon/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-coral/20 to-mustard/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-24 h-24 bg-neon rounded-full flex items-center justify-center mx-auto mb-6 animate-neon-pulse">
              <CheckCircle className="w-12 h-12 text-dark" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-light mb-6 leading-tight">
              Welcome to the 
              <br />
              <span className="gradient-text">AI Revolution!</span>
            </h1>
            <p className="text-xl md:text-2xl text-mustard font-poppins font-light leading-relaxed">
              🎉 You're now part of an exclusive community of AI enthusiasts and innovators.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-dark/50 border border-neutral/30 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-neon mb-4 mx-auto" />
              <h3 className="text-lg font-montserrat font-semibold text-light mb-2">Daily Insights</h3>
              <p className="text-neutral text-sm">Get curated AI news delivered to your inbox</p>
            </div>
            <div className="bg-dark/50 border border-neutral/30 rounded-lg p-6 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-coral mb-4 mx-auto" />
              <h3 className="text-lg font-montserrat font-semibold text-light mb-2">Breaking News</h3>
              <p className="text-neutral text-sm">First to know about major AI breakthroughs</p>
            </div>
            <div className="bg-dark/50 border border-neutral/30 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-8 h-8 text-mustard mb-4 mx-auto" />
              <h3 className="text-lg font-montserrat font-semibold text-light mb-2">Expert Analysis</h3>
              <p className="text-neutral text-sm">In-depth analysis from AI industry leaders</p>
            </div>
          </div>

          {/* What's Next */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-montserrat font-bold text-light mb-4">What's Next?</h3>
            <p className="text-neutral mb-6">
              Your first AI-curated newsletter will arrive within the next 24 hours. 
              In the meantime, we're already analyzing the latest trends just for you.
            </p>
            <div className="text-sm text-neutral/70">
              Follow us on social media for real-time updates and join the conversation!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
