
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Search, 
  Filter, 
  Users, 
  Star, 
  Download,
  ArrowLeft,
  Zap,
  Globe,
  Code,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Apis = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "全部", count: 234 },
    { id: "social", name: "社交媒體", count: 45 },
    { id: "productivity", name: "生產力工具", count: 67 },
    { id: "ecommerce", name: "電子商務", count: 32 },
    { id: "finance", name: "金融服務", count: 28 },
    { id: "ai", name: "人工智能", count: 19 },
    { id: "database", name: "數據庫", count: 43 }
  ];

  const apis = [
    { 
      id: 1, 
      name: "GitHub API", 
      description: "管理程式碼儲存庫、議題、拉取請求等",
      category: "productivity",
      users: 1234,
      rating: 4.8,
      price: "免費",
      icon: "🐙",
      featured: true
    },
    { 
      id: 2, 
      name: "Slack API", 
      description: "發送訊息、管理頻道、創建機器人",
      category: "social",
      users: 987,
      rating: 4.7,
      price: "免費",
      icon: "📱",
      featured: true
    },
    { 
      id: 3, 
      name: "Google Sheets API", 
      description: "讀取、寫入和格式化 Google 試算表",
      category: "productivity",
      users: 2345,
      rating: 4.9,
      price: "免費",
      icon: "📊",
      featured: true
    },
    { 
      id: 4, 
      name: "OpenAI API", 
      description: "存取 GPT 模型和其他 AI 服務",
      category: "ai",
      users: 567,
      rating: 4.6,
      price: "付費",
      icon: "🤖",
      featured: false
    },
    { 
      id: 5, 
      name: "Stripe API", 
      description: "處理付款、訂閱和發票",
      category: "finance",
      users: 890,
      rating: 4.8,
      price: "付費",
      icon: "💳",
      featured: false
    },
    { 
      id: 6, 
      name: "Twitter API", 
      description: "發佈推文、取得社群媒體數據",
      category: "social",
      users: 1456,
      rating: 4.5,
      price: "免費增值",
      icon: "🐦",
      featured: false
    },
    { 
      id: 7, 
      name: "MongoDB API", 
      description: "NoSQL 資料庫操作和管理",
      category: "database",
      users: 678,
      rating: 4.7,
      price: "免費增值",
      icon: "🍃",
      featured: false
    },
    { 
      id: 8, 
      name: "Shopify API", 
      description: "管理商店、產品、訂單和客戶",
      category: "ecommerce",
      users: 543,
      rating: 4.6,
      price: "免費",
      icon: "🛍️",
      featured: false
    }
  ];

  const filteredApis = apis.filter(api => {
    const matchesSearch = api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || api.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredApis = apis.filter(api => api.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-purple-400" />
                <h1 className="text-2xl font-bold text-white">API 市集</h1>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Globe className="mr-2 h-4 w-4" />
              提交 API
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="搜尋 API..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-purple-500"
            />
          </div>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <Filter className="mr-2 h-4 w-4" />
            進階篩選
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 mb-8">
            <TabsTrigger value="featured" className="data-[state=active]:bg-purple-600">
              精選 API
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
              全部 API
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-purple-600">
              分類瀏覽
            </TabsTrigger>
          </TabsList>

          {/* Featured APIs */}
          <TabsContent value="featured" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredApis.map((api) => (
                <Card key={api.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 relative">
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-yellow-600 text-yellow-100">
                      <Star className="h-3 w-3 mr-1" />
                      精選
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{api.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{api.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {api.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-slate-400">
                            <Users className="h-4 w-4 mr-1" />
                            {api.users}
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <Star className="h-4 w-4 mr-1 fill-current" />
                            {api.rating}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          {api.price}
                        </Badge>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <Code className="mr-2 h-4 w-4" />
                        開始使用
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All APIs */}
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApis.map((api) => (
                <Card key={api.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{api.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{api.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {api.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-slate-400">
                            <Users className="h-4 w-4 mr-1" />
                            {api.users}
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <Star className="h-4 w-4 mr-1 fill-current" />
                            {api.rating}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          {api.price}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <Code className="mr-2 h-4 w-4" />
                          使用
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-800">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {category.count} 個可用的 API
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      瀏覽 {category.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {filteredApis.length === 0 && (
          <div className="text-center py-16">
            <Database className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">找不到符合的 API</h3>
            <p className="text-slate-400 mb-6">試試調整搜尋條件或瀏覽其他分類</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apis;
