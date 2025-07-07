
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Instagram, Youtube, Copy, Check } from "lucide-react";

interface VerificationStepProps {
  selectedPlatform: "instagram" | "youtube" | "both";
  instagramCode: string;
  youtubeCode: string;
  copiedCode: string | null;
  onCopyCode: (code: string, type: string) => void;
  onComplete: () => void;
  onBack: () => void;
}

const VerificationStep = ({
  selectedPlatform,
  instagramCode,
  youtubeCode,
  copiedCode,
  onCopyCode,
  onComplete,
  onBack
}: VerificationStepProps) => {
  return (
    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">Account Verification</CardTitle>
        <CardDescription className="text-lg">
          Follow the steps below to verify your account ownership
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Instagram Verification */}
        {(selectedPlatform === "instagram" || selectedPlatform === "both") && (
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-purple-600" />
              <h4 className="font-semibold text-purple-900">Instagram Verification</h4>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-purple-800">
                <strong>Step 1:</strong> Copy your verification code below
              </p>
              
              <div className="flex items-center gap-2 bg-white p-3 rounded border">
                <code className="font-mono text-2xl font-bold text-purple-600">
                  {instagramCode}
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onCopyCode(instagramCode, "Instagram")}
                  className="ml-auto"
                >
                  {copiedCode === "Instagram" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              
              <div className="text-sm text-purple-800 space-y-1">
                <p><strong>Step 2:</strong> Go to your latest Instagram post</p>
                <p><strong>Step 3:</strong> Comment <code className="bg-white px-1 rounded font-mono">{instagramCode}</code> on your post</p>
                <p><strong>Step 4:</strong> Keep the comment public for verification</p>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Verification */}
        {(selectedPlatform === "youtube" || selectedPlatform === "both") && (
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-6 h-6 text-red-600" />
              <h4 className="font-semibold text-red-900">YouTube Verification</h4>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-red-800">
                <strong>Step 1:</strong> Copy your verification code below
              </p>
              
              <div className="flex items-center gap-2 bg-white p-3 rounded border">
                <code className="font-mono text-2xl font-bold text-red-600">
                  {youtubeCode}
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onCopyCode(youtubeCode, "YouTube")}
                  className="ml-auto"
                >
                  {copiedCode === "YouTube" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              
              <div className="text-sm text-red-800 space-y-1">
                <p><strong>Step 2:</strong> Go to your latest YouTube video</p>
                <p><strong>Step 3:</strong> Comment <code className="bg-white px-1 rounded font-mono">{youtubeCode}</code> on your video</p>
                <p><strong>Step 4:</strong> Keep the comment public for verification</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Our system will automatically detect your comments within 2-3 minutes. 
            You can delete the verification comments after successful linking.
          </p>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex-1 h-12"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back
          </Button>
          <Button 
            onClick={onComplete}
            className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            Complete Setup
            <CheckCircle className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationStep;
