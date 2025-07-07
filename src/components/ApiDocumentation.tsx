
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Send, PlayCircle, List } from "lucide-react";

const ApiDocumentation = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/generate",
      description: "Generate a new video with custom prompt",
      icon: <PlayCircle className="w-4 h-4" />,
      example: {
        request: `{
  "prompt": "Top 5 Marvel villains explained",
  "platform": "both",
  "auto_post": true
}`,
        response: `{
  "video_id": "vid_12345",
  "status": "generating",
  "estimated_completion": "2024-01-20T15:30:00Z"
}`
      }
    },
    {
      method: "GET",
      path: "/api/videos",
      description: "List all your videos with status and metrics",
      icon: <List className="w-4 h-4" />,
      example: {
        response: `{
  "videos": [
    {
      "id": "vid_12345",
      "title": "Top 5 Marvel villains explained",
      "status": "posted",
      "platforms": ["instagram", "youtube"],
      "metrics": {
        "views": 12400,
        "likes": 892
      },
      "created_at": "2024-01-20T12:00:00Z"
    }
  ],
  "total": 25
}`
      }
    },
    {
      method: "POST",
      path: "/api/post",
      description: "Post an existing video to specific platforms",
      icon: <Send className="w-4 h-4" />,
      example: {
        request: `{
  "video_id": "vid_12345",
  "platforms": ["instagram"],
  "caption": "Custom caption for this post"
}`,
        response: `{
  "success": true,
  "posted_to": ["instagram"],
  "post_urls": {
    "instagram": "https://instagram.com/p/xyz123"
  }
}`
      }
    },
    {
      method: "GET",
      path: "/api/status",
      description: "Check your account status and limits",
      icon: <Code className="w-4 h-4" />,
      example: {
        response: `{
  "account_status": "active",
  "linked_accounts": {
    "instagram": "@your_handle",
    "youtube": "Your Channel"
  },
  "usage": {
    "videos_this_month": 45,
    "limit": 100
  },
  "next_generation": "2024-01-20T18:00:00Z"
}`
      }
    }
  ];

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5" />
          API Documentation
        </CardTitle>
        <CardDescription>
          Integrate Blotato with your applications using our REST API
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Authentication */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Authentication</h4>
            <p className="text-sm text-blue-800 mb-3">
              Include your API key in the Authorization header for all requests:
            </p>
            <code className="block bg-blue-900 text-blue-100 p-3 rounded text-sm">
              Authorization: Bearer blot_sk_your_api_key_here
            </code>
          </div>

          {/* Base URL */}
          <div>
            <h4 className="font-medium mb-2">Base URL</h4>
            <code className="bg-gray-100 px-3 py-1 rounded">https://api.blotato.com/v1</code>
          </div>

          {/* Endpoints */}
          <div className="space-y-4">
            <h4 className="font-medium">Endpoints</h4>
            {endpoints.map((endpoint, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  {endpoint.icon}
                  <Badge variant={endpoint.method === "GET" ? "secondary" : "default"}>
                    {endpoint.method}
                  </Badge>
                  <code className="font-mono text-sm">{endpoint.path}</code>
                </div>
                <p className="text-sm text-gray-600 mb-4">{endpoint.description}</p>
                
                <Tabs defaultValue="response" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    {endpoint.example.request && <TabsTrigger value="request">Request</TabsTrigger>}
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  
                  {endpoint.example.request && (
                    <TabsContent value="request">
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                        <code>{endpoint.example.request}</code>
                      </pre>
                    </TabsContent>
                  )}
                  
                  <TabsContent value="response">
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                      <code>{endpoint.example.response}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            ))}
          </div>

          {/* Rate Limits */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-900 mb-2">Rate Limits</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• 100 requests per hour for video generation</li>
              <li>• 1000 requests per hour for other endpoints</li>
              <li>• Rate limit headers are included in all responses</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiDocumentation;
