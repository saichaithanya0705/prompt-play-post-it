
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Play, Eye, ThumbsUp, Share, Clock, TrendingUp, Instagram, Youtube } from "lucide-react";

const DashboardPreview = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Status Card */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              Active
            </CardTitle>
            <CardDescription>Your AI is creating content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Auto-posting</span>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Next video</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>In 6 hours</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Generate Now
            </Button>
          </CardContent>
        </Card>

        {/* Recent Videos */}
        <Card className="lg:col-span-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Videos</CardTitle>
            <CardDescription>Your latest AI-generated content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Top 5 Marvel Characters You Didn't Know",
                  platform: "instagram",
                  views: "12.4K",
                  likes: "892",
                  status: "posted"
                },
                {
                  title: "Why Thor is Actually the Weakest Avenger",
                  platform: "youtube",
                  views: "8.2K",
                  likes: "654",
                  status: "posted"
                },
                {
                  title: "Marvel Multiverse Explained in 60 Seconds",
                  platform: "both",
                  views: "0",
                  likes: "0",
                  status: "generating"
                }
              ].map((video, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                  <div className="w-16 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{video.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        {video.platform === "instagram" && <Instagram className="w-4 h-4 text-purple-600" />}
                        {video.platform === "youtube" && <Youtube className="w-4 h-4 text-red-600" />}
                        {video.platform === "both" && (
                          <>
                            <Instagram className="w-4 h-4 text-purple-600" />
                            <Youtube className="w-4 h-4 text-red-600" />
                          </>
                        )}
                      </div>
                      {video.status === "posted" ? (
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" /> {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" /> {video.likes}
                          </span>
                        </div>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Generating...
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics */}
        <Card className="lg:col-span-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              This Week's Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">47.2K</div>
                <div className="text-sm text-gray-600">Total Views</div>
                <div className="text-xs text-green-600">+23%</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3.1K</div>
                <div className="text-sm text-gray-600">Likes</div>
                <div className="text-xs text-green-600">+18%</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">287</div>
                <div className="text-sm text-gray-600">Shares</div>
                <div className="text-xs text-green-600">+41%</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-sm text-gray-600">Videos Posted</div>
                <div className="text-xs text-gray-500">2 per day</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPreview;
