
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Workflow, 
  Database, 
  MessageSquare, 
  Folder, 
  Users, 
  Zap, 
  ArrowRight,
  Play,
  Settings,
  Share2,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "活躍工作流程", value: "245", icon: Workflow },
    { label: "API 串接", value: "1,234", icon: Database },
    { label: "討論話題", value: "567", icon: MessageSquare },
    { label: "專案數量", value: "89", icon: Folder },
  ];

  const recentWorkflows = [
    { id: 1, name: "用戶註冊自動化", status: "運行中", triggers: 123 },
    { id: 2, name: "數據同步流程", status: "暫停", triggers: 456 },
    { id: 3, name: "通知推送系統", status: "運行中", triggers: 789 },
  ];

  const popularApis = [
    { name: "GitHub API", category: "開發工具", users: 1234 },
    { name: "Slack API", category: "通訊協作", users: 987 },
    { name: "Google Sheets API", category: "數據處理", users: 2345 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">FlowConnect</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/workflows" className="text-slate-300 hover:text-white transition-colors">
                工作流程
              </Link>
              <Link to="/apis" className="text-slate-300 hover:text-white transition-colors">
                API 市集
              </Link>
              <Link to="/discussions" className="text-slate-300 hover:text-white transition-colors">
                討論區
              </Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">
                專案管理
              </Link>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                開始使用
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              連接一切，自動化一切
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              強大的 API 串接平台，讓您輕鬆建立工作流程、收集資訊、管理專案，並與團隊協作討論
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Play className="mr-2 h-5 w-5" />
                立即開始
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Share2 className="mr-2 h-5 w-5" />
                查看範例
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="flex items-center text-xs text-green-400 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% 本月
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
                概覽
              </TabsTrigger>
              <TabsTrigger value="workflows" className="data-[state=active]:bg-blue-600">
                工作流程
              </TabsTrigger>
              <TabsTrigger value="apis" className="data-[state=active]:bg-blue-600">
                熱門 API
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Workflow className="mr-2 h-5 w-5 text-blue-400" />
                      近期工作流程
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentWorkflows.map((workflow) => (
                        <div key={workflow.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">{workflow.name}</h4>
                            <p className="text-sm text-slate-400">觸發次數: {workflow.triggers}</p>
                          </div>
                          <Badge variant={workflow.status === "運行中" ? "default" : "secondary"}>
                            {workflow.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-purple-400" />
                      最新討論
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <h4 className="text-white font-medium">如何整合 OpenAI API？</h4>
                        <p className="text-sm text-slate-400 mt-1">張三 · 2 小時前 · 5 回覆</p>
                      </div>
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <h4 className="text-white font-medium">數據同步最佳實踐</h4>
                        <p className="text-sm text-slate-400 mt-1">李四 · 4 小時前 · 8 回覆</p>
                      </div>
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <h4 className="text-white font-medium">自動化測試流程分享</h4>
                        <p className="text-sm text-slate-400 mt-1">王五 · 1 天前 · 12 回覆</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="workflows" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentWorkflows.map((workflow) => (
                  <Card key={workflow.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">{workflow.name}</CardTitle>
                      <CardDescription className="text-slate-400">
                        觸發次數: {workflow.triggers}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant={workflow.status === "運行中" ? "default" : "secondary"}>
                          {workflow.status}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                          查看詳情
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apis" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularApis.map((api, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">{api.name}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {api.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-400">
                          <Users className="mr-1 h-4 w-4" />
                          {api.users} 使用者
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          使用
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="text-white font-semibold">FlowConnect</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 FlowConnect. 保留所有權利。
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
