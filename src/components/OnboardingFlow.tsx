
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ProgressBar from "./onboarding/ProgressBar";
import NicheStep from "./onboarding/NicheStep";
import PlatformStep from "./onboarding/PlatformStep";
import VerificationStep from "./onboarding/VerificationStep";

interface OnboardingFlowProps {
  email: string;
}

const OnboardingFlow = ({ email }: OnboardingFlowProps) => {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<"instagram" | "youtube" | "both">("both");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [youtubeChannel, setYoutubeChannel] = useState("");
  const [instagramCode, setInstagramCode] = useState("");
  const [youtubeCode, setYoutubeCode] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  // Generate random 4-digit codes when user reaches step 2
  const generateCodes = () => {
    if (!instagramCode) setInstagramCode(Math.floor(1000 + Math.random() * 9000).toString());
    if (!youtubeCode) setYoutubeCode(Math.floor(1000 + Math.random() * 9000).toString());
  };

  const handleNext = () => {
    if (step === 1 && !niche) {
      toast({
        title: "Niche required",
        description: "Please enter your content niche",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2) {
      generateCodes();
    }
    
    setStep(step + 1);
  };

  const handleComplete = () => {
    toast({
      title: "Setup Complete!",
      description: "Your AI video creation is starting. You'll receive your first video within 24 hours.",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
    toast({
      title: "Copied!",
      description: `${type} code copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ProgressBar currentStep={step} totalSteps={3} />

        {step === 1 && (
          <NicheStep
            niche={niche}
            setNiche={setNiche}
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <PlatformStep
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            instagramHandle={instagramHandle}
            setInstagramHandle={setInstagramHandle}
            youtubeChannel={youtubeChannel}
            setYoutubeChannel={setYoutubeChannel}
            onNext={handleNext}
            onBack={() => setStep(step - 1)}
          />
        )}

        {step === 3 && (
          <VerificationStep
            selectedPlatform={selectedPlatform}
            instagramCode={instagramCode}
            youtubeCode={youtubeCode}
            copiedCode={copiedCode}
            onCopyCode={copyToClipboard}
            onComplete={handleComplete}
            onBack={() => setStep(step - 1)}
          />
        )}
      </div>
    </div>
  );
};

export default OnboardingFlow;
