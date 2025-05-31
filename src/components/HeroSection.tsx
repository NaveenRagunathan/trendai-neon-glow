
import React, { useState } from 'react';
import { Mail, ArrowRight, Zap, TrendingUp, Brain } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ThankYouPage from './ThankYouPage';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
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

    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed! 🎉",
            description: "This email is already part of our AI community.",
            className: "bg-dark border-neon text-light",
          });
        } else {
          throw error;
        }
      } else {
        console.log('Email subscription successful');
        setShowThankYou(true);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showThankYou) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-cyan-400 animate-neon-pulse" />
              <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-white">
                TrendAI News
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
              AI-Powered News
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-poppins font-light max-w-3xl mx-auto leading-relaxed">
              Get the latest AI and tech breakthroughs curated by artificial intelligence. 
              No noise, just the insights that matter.
            </p>
          </div>

          {/* Features Icons */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-slate-400 text-sm font-poppins">Real-time</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <span className="text-slate-400 text-sm font-poppins">Trending</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-slate-400 text-sm font-poppins">AI-Curated</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for AI news insights"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-600 rounded-lg text-white placeholder-slate-400 font-poppins focus:border-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  disabled={isLoading}
                  aria-label="Email address"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-montserrat font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Join the AI Revolution
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
