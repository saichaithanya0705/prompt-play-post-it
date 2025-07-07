
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, ArrowRight, ArrowLeft, Instagram, Youtube } from "lucide-react";

interface PlatformStepProps {
  selectedPlatform: "instagram" | "youtube" | "both";
  setSelectedPlatform: (platform: "instagram" | "youtube" | "both") => void;
  instagramHandle: string;
  setInstagramHandle: (handle: string) => void;
  youtubeChannel: string;
  setYoutubeChannel: (channel: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const PlatformStep = ({
  selectedPlatform,
  setSelectedPlatform,
  instagramHandle,
  setInstagramHandle,
  youtubeChannel,
  setYoutubeChannel,
  onNext,
  onBack
}: PlatformStepProps) => {
  const isNextDisabled = 
    (selectedPlatform === "instagram" && !instagramHandle) ||
    (selectedPlatform === "youtube" && !youtubeChannel) ||
    (selectedPlatform === "both" && (!instagramHandle || !youtubeChannel));

  return (
    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Link className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl">Choose Your Platforms</CardTitle>
        <CardDescription className="text-lg">
          Select where you want your AI videos posted and provide your account details
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
                <h3 className="font-semibold">Instagram Reels Only</h3>
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
                <h3 className="font-semibold">YouTube Shorts Only</h3>
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

        <div className="space-y-4 pt-4 border-t">
          <h4 className="font-semibold text-gray-900">Account Details</h4>
          
          {(selectedPlatform === "instagram" || selectedPlatform === "both") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram Handle
              </label>
              <Input
                type="text"
                placeholder="@your_handle"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                className="h-12"
              />
            </div>
          )}

          {(selectedPlatform === "youtube" || selectedPlatform === "both") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                YouTube Channel URL
              </label>
              <Input
                type="text"
                placeholder="https://www.youtube.com/@your_channel"
                value={youtubeChannel}
                onChange={(e) => setYoutubeChannel(e.target.value)}
                className="h-12"
              />
            </div>
          )}
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
            onClick={onNext}
            className="flex-1 h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            disabled={isNextDisabled}
          >
            Continue
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformStep;
