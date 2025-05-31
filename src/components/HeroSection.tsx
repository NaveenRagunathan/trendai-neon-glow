
import React, { useState } from 'react';
import { Mail, ArrowRight, Zap, TrendingUp, Brain } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('Subscribing email:', email);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubscribed(true);
      toast({
        title: "Welcome to TrendAI News! 🚀",
        description: "You'll receive your first AI-curated newsletter soon.",
        className: "bg-dark border-neon text-light",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-coral/20 to-mustard/20 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-to-r from-neon/20 to-coral/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-mustard/30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-neon animate-neon-pulse" />
              <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-light">
                TrendAI News
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-coral via-mustard to-neon mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-light mb-6 leading-tight">
              AI-Powered News
              <br />
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-xl md:text-2xl text-mustard font-poppins font-light max-w-3xl mx-auto leading-relaxed">
              Get the latest AI and tech breakthroughs curated by artificial intelligence. 
              No noise, just the insights that matter.
            </p>
          </div>

          {/* Features Icons */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-8 h-8 text-neon" />
              <span className="text-neutral text-sm font-poppins">Real-time</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="w-8 h-8 text-coral" />
              <span className="text-neutral text-sm font-poppins">Trending</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Brain className="w-8 h-8 text-mustard" />
              <span className="text-neutral text-sm font-poppins">AI-Curated</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for AI news insights"
                    className="w-full pl-12 pr-4 py-4 bg-dark border-2 border-neutral rounded-lg text-light placeholder-neutral font-poppins focus:border-neon focus:outline-none focus:neon-glow transition-all duration-300"
                    disabled={isLoading}
                    aria-label="Email address"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-coral hover:bg-coral/90 text-light font-montserrat font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-light border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Join the AI Revolution
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-neon rounded-full flex items-center justify-center mx-auto animate-neon-pulse">
                  <Mail className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-neon">You're In! 🎉</h3>
                <p className="text-neutral">
                  Your first AI-curated newsletter is on its way. 
                  <br />
                  Welcome to the future of news.
                </p>
              </div>
            )}

            <p className="text-sm text-neutral mt-4 font-poppins">
              Join 10,000+ innovators getting daily AI insights. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-neutral font-poppins mb-6">Trusted by professionals from</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-montserrat font-semibold text-light">Google</div>
              <div className="text-lg font-montserrat font-semibold text-light">Microsoft</div>
              <div className="text-lg font-montserrat font-semibold text-light">OpenAI</div>
              <div className="text-lg font-montserrat font-semibold text-light">Tesla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
