
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Workflow, 
  Plus, 
  Search, 
  Filter, 
  Play, 
  Pause, 
  Edit, 
  Trash2,
  Zap,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Workflows = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const workflows = [
    { 
      id: 1, 
      name: "用戶註冊自動化", 
      description: "自動處理新用戶註冊並發送歡迎郵件",
      status: "運行中", 
      triggers: 123,
      lastRun: "2 分鐘前",
      nodes: 5
    },
    { 
      id: 2, 
      name: "數據同步流程", 
      description: "每日同步客戶數據到 CRM 系統",
      status: "暫停", 
      triggers: 456,
      lastRun: "1 小時前",
      nodes: 8
    },
    { 
      id: 3, 
      name: "通知推送系統", 
      description: "即時推送重要通知到 Slack 和郵件",
      status: "運行中", 
      triggers: 789,
      lastRun: "5 分鐘前",
      nodes: 3
    },
    { 
      id: 4, 
      name: "訂單處理流程", 
      description: "自動處理電商訂單並更新庫存",
      status: "運行中", 
      triggers: 234,
      lastRun: "10 分鐘前",
      nodes: 12
    },
    { 
      id: 5, 
      name: "備份自動化", 
      description: "定期備份重要數據到雲端存儲",
      status: "運行中", 
      triggers: 67,
      lastRun: "1 小時前",
      nodes: 4
    },
    { 
      id: 6, 
      name: "報告生成器", 
      description: "每週自動生成業務報告並發送給管理層",
      status: "暫停", 
      triggers: 12,
      lastRun: "3 天前",
      nodes: 7
    }
  ];

  const filteredWorkflows = workflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <Workflow className="h-6 w-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">工作流程</h1>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              新增工作流程
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
              placeholder="搜尋工作流程..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <Filter className="mr-2 h-4 w-4" />
            篩選
          </Button>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map((workflow) => (
            <Card key={workflow.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg">{workflow.name}</CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {workflow.description}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={workflow.status === "運行中" ? "default" : "secondary"}
                    className={workflow.status === "運行中" ? "bg-green-600" : "bg-gray-600"}
                  >
                    {workflow.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">觸發次數</span>
                    <span className="text-white font-medium">{workflow.triggers}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">節點數量</span>
                    <span className="text-white font-medium">{workflow.nodes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">最後執行</span>
                    <span className="text-white font-medium">{workflow.lastRun}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-4 border-t border-slate-700">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className={workflow.status === "運行中" 
                        ? "text-orange-400 hover:text-orange-300 hover:bg-orange-900/20" 
                        : "text-green-400 hover:text-green-300 hover:bg-green-900/20"
                      }
                    >
                      {workflow.status === "運行中" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkflows.length === 0 && (
          <div className="text-center py-16">
            <Zap className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">找不到符合的工作流程</h3>
            <p className="text-slate-400 mb-6">試試調整搜尋條件或建立新的工作流程</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              建立第一個工作流程
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workflows;
