
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Zap, 
  Link, 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  Youtube,
  Sparkles,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import OnboardingFlow from "@/components/OnboardingFlow";
import DashboardPreview from "@/components/DashboardPreview";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const [email, setEmail] = useState("");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { toast } = useToast();

  const handleGetStarted = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to get started",
        variant: "destructive",
      });
      return;
    }
    setShowOnboarding(true);
  };

  if (showOnboarding) {
    return <OnboardingFlow email={email} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Content Creation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight">
            Blotato
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            AI videos that post themselves
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Give us a topic. We create engaging videos and post them daily to your Instagram Reels & YouTube Shorts. Completely automated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-16">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg"
            />
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-8 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Quick Demo */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                "Marvel memes" → AI Video → Auto-posted
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Takes 2 minutes to setup
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Four simple steps to automated content creation</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Target}
            title="1. Pick Your Niche"
            description="Just tell us your topic: 'Marvel memes', 'Stock tips', 'Motivation' - anything!"
            gradient="from-pink-500 to-rose-500"
          />
          <FeatureCard
            icon={Zap}
            title="2. AI Creates Videos"
            description="Our AI writes scripts, generates voiceovers, and finds perfect visuals automatically"
            gradient="from-purple-500 to-indigo-500"
          />
          <FeatureCard
            icon={Link}
            title="3. Link Your Accounts"
            description="No OAuth needed - just a simple 4-digit code verification system"
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon={Bot}
            title="4. Auto-Post Daily"
            description="Fresh content posts to your Instagram Reels & YouTube Shorts every day"
            gradient="from-green-500 to-emerald-500"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Blotato?</h2>
          <p className="text-xl text-gray-600">Built for creators who want growth without the grind</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Zero Effort Setup</CardTitle>
              <CardDescription>
                No scripting, editing, or scheduling. Just tell us your niche and we handle everything.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Built for Growth</CardTitle>
              <CardDescription>
                Optimized for Instagram Reels & YouTube Shorts - the fastest growing content formats.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Set & Forget</CardTitle>
              <CardDescription>
                Once setup, you'll get fresh content posted daily without lifting a finger.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple Dashboard</h2>
          <p className="text-xl text-gray-600">Monitor your automated content creation</p>
        </div>
        
        <DashboardPreview />
      </div>

      {/* Platforms */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-xl text-gray-600">Currently posting to the fastest growing formats</p>
        </div>

        <div className="flex justify-center gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Instagram Reels</h3>
            <p className="text-gray-600">Perfect for viral content</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
              <Youtube className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold">YouTube Shorts</h3>
            <p className="text-gray-600">Massive reach potential</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-16 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Content?</h2>
          <p className="text-xl mb-8 opacity-90">Join creators who've automated their way to growth</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-lg text-gray-900"
            />
            <Button 
              onClick={handleGetStarted}
              className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8 text-lg font-semibold"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">Free to start • 2-minute setup • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
