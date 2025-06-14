
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Folder, 
  Search, 
  Filter, 
  Plus, 
  ArrowLeft,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal,
  Star,
  GitBranch,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const projects = [
    {
      id: 1,
      name: "電商自動化系統",
      description: "完整的電商訂單處理和庫存管理自動化解決方案",
      status: "進行中",
      priority: "高",
      progress: 75,
      dueDate: "2024-01-15",
      members: [
        { name: "張三", avatar: "ZS" },
        { name: "李四", avatar: "LS" },
        { name: "王五", avatar: "WW" }
      ],
      tasks: {
        total: 24,
        completed: 18,
        inProgress: 4,
        pending: 2
      },
      category: "電商",
      createdAt: "2023-12-01",
      isStarred: true
    },
    {
      id: 2,
      name: "CRM 數據同步專案",
      description: "整合多個數據源到 CRM 系統的自動化流程",
      status: "計劃中",
      priority: "中",
      progress: 25,
      dueDate: "2024-02-28",
      members: [
        { name: "陳六", avatar: "CL" },
        { name: "劉七", avatar: "LQ" }
      ],
      tasks: {
        total: 16,
        completed: 4,
        inProgress: 2,
        pending: 10
      },
      category: "CRM",
      createdAt: "2023-12-15",
      isStarred: false
    },
    {
      id: 3,
      name: "社群媒體管理平台",
      description: "自動化社群媒體內容發布和互動管理",
      status: "已完成",
      priority: "低",
      progress: 100,
      dueDate: "2023-12-31",
      members: [
        { name: "周八", avatar: "ZB" },
        { name: "吳九", avatar: "WJ" },
        { name: "鄭十", avatar: "ZS" },
        { name: "趙十一", avatar: "ZSY" }
      ],
      tasks: {
        total: 32,
        completed: 32,
        inProgress: 0,
        pending: 0
      },
      category: "社群媒體",
      createdAt: "2023-10-01",
      isStarred: true
    },
    {
      id: 4,
      name: "AI 客服系統",
      description: "基於 OpenAI 的智能客服自動回復系統",
      status: "進行中",
      priority: "高",
      progress: 60,
      dueDate: "2024-01-31",
      members: [
        { name: "孫十二", avatar: "SSE" },
        { name: "李十三", avatar: "LSS" }
      ],
      tasks: {
        total: 20,
        completed: 12,
        inProgress: 5,
        pending: 3
      },
      category: "AI",
      createdAt: "2023-11-15",
      isStarred: false
    },
    {
      id: 5,
      name: "財務報表自動化",
      description: "自動生成和分發財務報表的工作流程",
      status: "暫停",
      priority: "中",
      progress: 40,
      dueDate: "2024-03-15",
      members: [
        { name: "錢十四", avatar: "QSS" }
      ],
      tasks: {
        total: 12,
        completed: 5,
        inProgress: 1,
        pending: 6
      },
      category: "財務",
      createdAt: "2023-11-01",
      isStarred: false
    },
    {
      id: 6,
      name: "品質監控系統",
      description: "產品品質監控和異常通知自動化系統",
      status: "進行中",
      priority: "高",
      progress: 85,
      dueDate: "2024-01-10",
      members: [
        { name: "楊十五", avatar: "YSW" },
        { name: "朱十六", avatar: "ZSL" },
        { name: "秦十七", avatar: "QSQ" }
      ],
      tasks: {
        total: 28,
        completed: 24,
        inProgress: 3,
        pending: 1
      },
      category: "品質管理",
      createdAt: "2023-10-15",
      isStarred: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "進行中":
        return "bg-blue-600";
      case "已完成":
        return "bg-green-600";
      case "計劃中":
        return "bg-yellow-600";
      case "暫停":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "高":
        return "text-red-400";
      case "中":
        return "text-yellow-400";
      case "低":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeProjects = projects.filter(p => p.status === "進行中");
  const starredProjects = projects.filter(p => p.isStarred);

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
                <Folder className="h-6 w-6 text-indigo-400" />
                <h1 className="text-2xl font-bold text-white">專案管理</h1>
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-2 h-4 w-4" />
              新增專案
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
              placeholder="搜尋專案..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-indigo-500"
            />
          </div>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <Filter className="mr-2 h-4 w-4" />
            篩選
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">總專案數</CardTitle>
              <Folder className="h-4 w-4 text-indigo-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{projects.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">進行中</CardTitle>
              <Activity className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{activeProjects.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">已完成</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {projects.filter(p => p.status === "已完成").length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">星標專案</CardTitle>
              <Star className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{starredProjects.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-indigo-600">
              全部專案
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-indigo-600">
              進行中
            </TabsTrigger>
            <TabsTrigger value="starred" className="data-[state=active]:bg-indigo-600">
              星標專案
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-indigo-600">
              已完成
            </TabsTrigger>
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <div className={`flex items-center ${getPriorityColor(project.priority)}`}>
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {project.priority}
                          </div>
                          {project.isStarred && (
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progress */}
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-400">進度</span>
                          <span className="text-white font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      {/* Tasks */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">任務</span>
                        <span className="text-white font-medium">
                          {project.tasks.completed}/{project.tasks.total}
                        </span>
                      </div>

                      {/* Due Date */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-slate-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          截止日期
                        </div>
                        <span className="text-white font-medium">{project.dueDate}</span>
                      </div>

                      {/* Team Members */}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">團隊成員</span>
                        <div className="flex items-center space-x-1">
                          {project.members.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-6 w-6">
                              <AvatarFallback className="text-xs bg-slate-700 text-slate-300">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.members.length > 3 && (
                            <div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center">
                              <span className="text-xs text-slate-300">+{project.members.length - 3}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Category */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {project.category}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-indigo-400 hover:text-indigo-300">
                          查看詳情
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Active Projects */}
          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProjects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-blue-600">進行中</Badge>
                          <div className={`flex items-center ${getPriorityColor(project.priority)}`}>
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {project.priority}
                          </div>
                        </div>
                        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-400">進度</span>
                          <span className="text-white font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">截止日期</span>
                        <span className="text-white font-medium">{project.dueDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Starred Projects */}
          <TabsContent value="starred" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starredProjects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </div>
                        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-400">進度</span>
                          <span className="text-white font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Projects */}
          <TabsContent value="completed" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.status === "已完成").map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-green-600">已完成</Badge>
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-slate-400 mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                          {project.tasks.total} 個任務完成
                        </div>
                      </div>
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

export default Projects;
