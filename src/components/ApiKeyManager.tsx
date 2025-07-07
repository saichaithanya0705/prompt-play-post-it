
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Copy, Trash2, Plus, Key } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
  isActive: boolean;
}

const ApiKeyManager = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Mobile App Integration",
      key: "blot_sk_1234567890abcdef",
      createdAt: "2024-01-15",
      lastUsed: "2024-01-20",
      isActive: true
    }
  ]);
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});
  const [newKeyName, setNewKeyName] = useState("");
  const [showNewKeyForm, setShowNewKeyForm] = useState(false);
  const { toast } = useToast();

  const generateApiKey = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'blot_sk_';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const createApiKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter a name for your API key",
        variant: "destructive",
      });
      return;
    }

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: generateApiKey(),
      createdAt: new Date().toISOString().split('T')[0],
      isActive: true
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    setShowNewKeyForm(false);
    
    toast({
      title: "API Key Created",
      description: "Your new API key has been generated successfully",
    });
  };

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  const deleteApiKey = (keyId: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== keyId));
    toast({
      title: "API Key Deleted",
      description: "The API key has been permanently deleted",
    });
  };

  const maskKey = (key: string) => {
    return key.substring(0, 12) + "..." + key.substring(key.length - 4);
  };

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="w-5 h-5" />
          API Keys
        </CardTitle>
        <CardDescription>
          Use API keys to control your Blotato account from other applications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* API Documentation */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-2">API Endpoints</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div><code className="bg-white px-2 py-1 rounded">POST /api/generate</code> - Generate a new video</div>
            <div><code className="bg-white px-2 py-1 rounded">GET /api/videos</code> - List your videos</div>
            <div><code className="bg-white px-2 py-1 rounded">POST /api/post</code> - Post video to platforms</div>
            <div><code className="bg-white px-2 py-1 rounded">GET /api/status</code> - Check account status</div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Include your API key in the Authorization header: <code>Bearer your_api_key</code>
          </p>
        </div>

        {/* Create New Key */}
        {!showNewKeyForm ? (
          <Button 
            onClick={() => setShowNewKeyForm(true)}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New API Key
          </Button>
        ) : (
          <div className="space-y-3 p-4 border rounded-lg">
            <Input
              placeholder="API Key Name (e.g., Mobile App, Zapier Integration)"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={createApiKey}>Create Key</Button>
              <Button variant="outline" onClick={() => setShowNewKeyForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* API Keys List */}
        <div className="space-y-3">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">{apiKey.name}</h4>
                  <p className="text-sm text-gray-500">
                    Created {apiKey.createdAt}
                    {apiKey.lastUsed && ` • Last used ${apiKey.lastUsed}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={apiKey.isActive ? "default" : "secondary"}>
                    {apiKey.isActive ? "Active" : "Inactive"}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteApiKey(apiKey.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-gray-50 px-3 py-2 rounded text-sm font-mono">
                  {showKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleKeyVisibility(apiKey.id)}
                >
                  {showKeys[apiKey.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(apiKey.key)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {apiKeys.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Key className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No API keys created yet</p>
            <p className="text-sm">Create your first API key to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApiKeyManager;
