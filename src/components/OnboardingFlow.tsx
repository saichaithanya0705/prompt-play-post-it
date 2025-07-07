
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Target, Link, CheckCircle, Instagram, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OnboardingFlowProps {
  email: string;
}

const OnboardingFlow = ({ email }: OnboardingFlowProps) => {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<"instagram" | "youtube" | "both">("both");
  const { toast } = useToast();

  const handleNext = () => {
    if (step === 1 && !niche) {
      toast({
        title: "Niche required",
        description: "Please enter your content niche",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleComplete = () => {
    toast({
      title: "Setup Complete!",
      description: "Your AI video creation is starting. You'll receive your first video within 24 hours.",
    });
    // In a real app, this would redirect to dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Choose Niche */}
        {step === 1 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">What's Your Niche?</CardTitle>
              <CardDescription className="text-lg">
                Tell us your content topic and we'll create engaging videos around it
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input
                type="text"
                placeholder="e.g., Marvel memes, Stock market tips, Daily motivation..."
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="h-14 text-lg"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Marvel memes", "Stock tips", "Motivation", "Tech news", "Cooking tips", "Fitness"].map((example) => (
                  <Badge
                    key={example}
                    variant="outline"
                    className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 p-3 justify-center"
                    onClick={() => setNiche(example)}
                  >
                    {example}
                  </Badge>
                ))}
              </div>

              <Button 
                onClick={handleNext}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Link Accounts */}
        {step === 2 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Link className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Link Your Accounts</CardTitle>
              <CardDescription className="text-lg">
                Choose where you want your AI videos to be posted
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div 
                  onClick={() => setSelectedPlatform("instagram")}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPlatform === "instagram" ? "border-purple-500 bg-purple-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-semibold">Instagram Reels</h3>
                      <p className="text-sm text-gray-600">Perfect for viral short-form content</p>
                    </div>
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedPlatform("youtube")}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPlatform === "youtube" ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-8 h-8 text-red-600" />
                    <div>
                      <h3 className="font-semibold">YouTube Shorts</h3>
                      <p className="text-sm text-gray-600">Massive reach and monetization</p>
                    </div>
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedPlatform("both")}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPlatform === "both" ? "border-green-500 bg-green-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Instagram className="w-6 h-6 text-purple-600" />
                      <Youtube className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Both Platforms</h3>
                      <p className="text-sm text-gray-600">Maximum reach and engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setStep(step - 1)}
                  variant="outline"
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Verification */}
        {step === 3 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Account Verification</CardTitle>
              <CardDescription className="text-lg">
                We'll send you a 4-digit code to verify your account ownership
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">How it works:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside text-gray-600">
                  <li>We'll email you a 4-digit verification code</li>
                  <li>Post the code as a comment on your latest {selectedPlatform === "instagram" ? "Instagram" : selectedPlatform === "youtube" ? "YouTube" : "Instagram and YouTube"} post</li>
                  <li>Our system will find and verify the code</li>
                  <li>Account linked and ready to post!</li>
                </ol>
              </div>

              <Input
                type="text"
                placeholder="Enter 4-digit code (e.g., 1234)"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="h-14 text-lg text-center"
                maxLength={4}
              />

              <div className="flex gap-3">
                <Button 
                  onClick={() => setStep(step - 1)}
                  variant="outline"
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back
                </Button>
                <Button 
                  onClick={handleComplete}
                  className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  Complete Setup
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OnboardingFlow;
