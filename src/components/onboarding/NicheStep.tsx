
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, ArrowRight } from "lucide-react";

interface NicheStepProps {
  niche: string;
  setNiche: (niche: string) => void;
  onNext: () => void;
}

const NicheStep = ({ niche, setNiche, onNext }: NicheStepProps) => {
  const exampleNiches = ["Marvel memes", "Stock tips", "Motivation", "Tech news", "Cooking tips", "Fitness"];

  return (
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
          {exampleNiches.map((example) => (
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
          onClick={onNext}
          className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg"
        >
          Continue
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default NicheStep;
