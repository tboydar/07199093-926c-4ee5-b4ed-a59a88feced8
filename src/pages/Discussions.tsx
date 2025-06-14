
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Plus, 
  ArrowUp, 
  ArrowDown,
  ArrowLeft,
  Users,
  Clock,
  Tag,
  Eye,
  MessageCircle,
  ThumbsUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Discussions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const discussions = [
    {
      id: 1,
      title: "如何整合 OpenAI API 到工作流程中？",
      content: "我想在我的自動化流程中加入 ChatGPT，但不確定最佳的實作方式...",
      author: "張三",
      authorAvatar: "ZS",
      category: "技術討論",
      tags: ["OpenAI", "API", "自動化"],
      replies: 12,
      views: 156,
      votes: 8,
      createdAt: "2 小時前",
      isAnswered: false,
      isHot: true
    },
    {
      id: 2,
      title: "數據同步的最佳實踐分享",
      content: "經過幾個月的實驗，我整理了一些數據同步的心得...",
      author: "李四",
      authorAvatar: "LS",
      category: "經驗分享",
      tags: ["數據同步", "最佳實踐", "CRM"],
      replies: 8,
      views: 234,
      votes: 15,
      createdAt: "4 小時前",
      isAnswered: true,
      isHot: false
    },
    {
      id: 3,
      title: "自動化測試流程搭建指南",
      content: "完整的自動化測試流程搭建教學，從零開始...",
      author: "王五",
      authorAvatar: "WW",
      category: "教學指南",
      tags: ["自動化測試", "CI/CD", "教學"],
      replies: 25,
      views: 489,
      votes: 32,
      createdAt: "1 天前",
      isAnswered: true,
      isHot: true
    },
    {
      id: 4,
      title: "Webhook 安全性問題",
      content: "使用 Webhook 時應該注意哪些安全性問題？",
      author: "陳六",
      authorAvatar: "CL",
      category: "安全性",
      tags: ["Webhook", "安全", "最佳實踐"],
      replies: 6,
      views: 78,
      votes: 4,
      createdAt: "2 天前",
      isAnswered: false,
      isHot: false
    },
    {
      id: 5,
      title: "電商訂單處理自動化案例",
      content: "分享我們公司如何使用 FlowConnect 實現訂單自動化處理...",
      author: "劉七",
      authorAvatar: "LQ",
      category: "案例分享",
      tags: ["電商", "訂單處理", "案例"],
      replies: 18,
      views: 345,
      votes: 22,
      createdAt: "3 天前",
      isAnswered: true,
      isHot: false
    },
    {
      id: 6,
      title: "API 限流處理策略",
      content: "當遇到 API 限流時，有哪些有效的處理策略？",
      author: "周八",
      authorAvatar: "ZB",
      category: "技術討論",
      tags: ["API", "限流", "策略"],
      replies: 14,
      views: 267,
      votes: 19,
      createdAt: "5 天前",
      isAnswered: true,
      isHot: false
    }
  ];

  const categories = [
    { name: "技術討論", count: 45, color: "bg-blue-600" },
    { name: "經驗分享", count: 32, color: "bg-green-600" },
    { name: "教學指南", count: 28, color: "bg-purple-600" },
    { name: "案例分享", count: 19, color: "bg-orange-600" },
    { name: "安全性", count: 15, color: "bg-red-600" },
    { name: "問題求助", count: 67, color: "bg-yellow-600" }
  ];

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const hotDiscussions = discussions.filter(d => d.isHot);

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
                <MessageSquare className="h-6 w-6 text-green-400" />
                <h1 className="text-2xl font-bold text-white">討論區</h1>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              發起討論
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
              placeholder="搜尋討論..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-green-500"
            />
          </div>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <Filter className="mr-2 h-4 w-4" />
            篩選
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-600">
              全部討論
            </TabsTrigger>
            <TabsTrigger value="hot" className="data-[state=active]:bg-green-600">
              熱門話題
            </TabsTrigger>
            <TabsTrigger value="unanswered" className="data-[state=active]:bg-green-600">
              待解答
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-green-600">
              分類瀏覽
            </TabsTrigger>
          </TabsList>

          {/* All Discussions */}
          <TabsContent value="all" className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <Card key={discussion.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {discussion.isHot && (
                          <Badge className="bg-red-600 text-red-100">🔥 熱門</Badge>
                        )}
                        {discussion.isAnswered && (
                          <Badge className="bg-green-600 text-green-100">✓ 已解答</Badge>
                        )}
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {discussion.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg hover:text-blue-400 cursor-pointer">
                        {discussion.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
                        {discussion.content}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-center space-y-1 ml-4">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-green-400">
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <span className="text-white font-medium">{discussion.votes}</span>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-slate-700 text-slate-300">
                            {discussion.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-slate-400 text-sm">{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400 text-sm">
                        <Clock className="h-4 w-4" />
                        {discussion.createdAt}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        {discussion.views}
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        {discussion.replies}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-3">
                    {discussion.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Hot Discussions */}
          <TabsContent value="hot" className="space-y-4">
            {hotDiscussions.map((discussion) => (
              <Card key={discussion.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-red-600 text-red-100">🔥 熱門</Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {discussion.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg hover:text-blue-400 cursor-pointer">
                        {discussion.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
                        {discussion.content}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-center space-y-1 ml-4">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-green-400">
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <span className="text-white font-medium">{discussion.votes}</span>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-slate-700 text-slate-300">
                            {discussion.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-slate-400 text-sm">{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400 text-sm">
                        <Clock className="h-4 w-4" />
                        {discussion.createdAt}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        {discussion.views}
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        {discussion.replies}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Unanswered */}
          <TabsContent value="unanswered" className="space-y-4">
            {discussions.filter(d => !d.isAnswered).map((discussion) => (
              <Card key={discussion.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-yellow-600 text-yellow-100">❓ 待解答</Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {discussion.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg hover:text-blue-400 cursor-pointer">
                        {discussion.title}
                      </CardTitle>
                      <CardDescription className="text-slate-400 mt-2">
                        {discussion.content}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-slate-700 text-slate-300">
                            {discussion.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-slate-400 text-sm">{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400 text-sm">
                        <Clock className="h-4 w-4" />
                        {discussion.createdAt}
                      </div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ThumbsUp className="mr-2 h-4 w-4" />
                      幫助解答
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                      <div>
                        <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {category.count} 個討論
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-slate-400">
                        <Users className="h-4 w-4" />
                        活躍參與者
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        進入分類
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Discussions;
