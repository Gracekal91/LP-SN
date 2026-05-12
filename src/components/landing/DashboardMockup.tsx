import { Users, DollarSign, BookOpen, TrendingUp, Bell, Settings, Home, Calendar, FileText, MessageSquare, Plus, Send, BarChart3, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  { name: "Sarah", role: "Principal", initials: "S" },
  { name: "Michael", role: "Teacher", initials: "M" },
  { name: "Emily", role: "Counselor", initials: "E" },
  { name: "David", role: "Admin", initials: "D" },
  { name: "Lisa", role: "Teacher", initials: "L" },
];

const DashboardMockup = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Dashboard Container */}
      <div className="dashboard-mockup rounded-2xl overflow-hidden shadow-2xl border border-border/10 bg-card">
        {/* Browser Header */}
        <div className="bg-secondary/50 px-4 py-3 flex items-center gap-3 border-b border-border/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground text-center max-w-md mx-auto border border-border/10">
              app.schoolnetwork.io/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="flex bg-background min-h-[500px]">
          {/* Sidebar */}
          <div className="w-16 lg:w-56 bg-card border-r border-border/10 p-3 lg:p-4 flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6 px-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="hidden lg:block font-bold text-foreground tracking-tight">SchoolNet</span>
            </div>

            {/* Nav Items */}
            <nav className="space-y-1">
              {[
                { icon: Home, label: t('dashboard.nav.dashboard'), active: true },
                { icon: Users, label: t('dashboard.nav.students') },
                { icon: Calendar, label: t('dashboard.nav.schedule') },
                { icon: FileText, label: t('dashboard.nav.reports') },
                { icon: MessageSquare, label: t('dashboard.nav.messages') },
                { icon: Settings, label: t('dashboard.nav.settings') },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    item.active 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon size={18} />
                  <span className="hidden lg:block text-sm">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6 overflow-hidden">
            {/* Header with Team Avatars */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-foreground tracking-tight">{t('dashboard.header.welcome')}</h2>
                <p className="text-sm text-muted-foreground">{t('dashboard.header.subtitle')}</p>
              </div>
              <div className="flex items-center gap-3">
                {/* Initials Avatars */}
                <div className="hidden md:flex -space-x-2 mr-2">
                  {teamMembers.slice(0, 3).map((member, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground"
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center relative border border-border/10">
                  <Bell size={18} className="text-muted-foreground" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                    <span className="text-[8px] text-white font-bold">3</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {[
                { icon: Plus, label: t('dashboard.actions.addStudent'), color: "from-green-500 to-green-600" },
                { icon: Send, label: t('dashboard.actions.sendMessage'), color: "from-blue-500 to-blue-600" },
                { icon: BarChart3, label: t('dashboard.actions.generateReport'), color: "from-purple-500 to-purple-600" },
                { icon: Calendar, label: t('dashboard.actions.scheduleEvent'), color: "from-orange-500 to-orange-600" },
              ].map((action, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-card/60 border border-border/20 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors whitespace-nowrap"
                >
                  <div className={`w-6 h-6 rounded bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                    <action.icon size={12} className="text-white" />
                  </div>
                  <span className="hidden sm:inline">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
              {[
                { icon: Users, label: t('dashboard.stats.totalStudents'), value: "2,847", change: "+12%", color: "from-blue-500 to-blue-600" },
                { icon: MessageSquare, label: t('dashboard.stats.activeClasses'), value: "156", change: "+5%", color: "from-teal-500 to-teal-600" },
                { icon: DollarSign, label: t('dashboard.stats.revenue'), value: "$48.2K", change: "+18%", color: "from-purple-500 to-purple-600" },
                { icon: TrendingUp, label: t('dashboard.stats.attendance'), value: "94.2%", change: "+2%", color: "from-orange-500 to-orange-600" },
              ].map((stat, i) => (
                <div key={i} className="bg-card/60 border border-border/20 rounded-xl p-3 lg:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon size={16} className="text-white" />
                    </div>
                    <span className="text-xs text-green-400 font-medium">{stat.change}</span>
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Three Column Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Enrollment Chart */}
              <div className="bg-card/60 border border-border/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground text-sm">{t('dashboard.charts.enrollment')}</h3>
                  <span className="text-xs text-muted-foreground">{t('dashboard.charts.sixMonths')}</span>
                </div>
                <div className="h-24 flex items-end gap-1.5">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary/80 to-primary/40 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-card/60 border border-border/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground text-sm">{t('dashboard.charts.upcomingEvents')}</h3>
                  <Calendar size={14} className="text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  {[
                    { event: "Parent Meeting", date: "Today, 3PM", color: "bg-blue-500" },
                    { event: "Math Exam", date: "Tomorrow", color: "bg-orange-500" },
                    { event: "Sports Day", date: "Jan 5", color: "bg-green-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-8 rounded-full ${item.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages Preview */}
              <div className="bg-card/60 border border-border/20 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground text-sm">{t('dashboard.charts.messages')}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">{t('dashboard.charts.newMessages', { count: 5 })}</span>
                </div>
                <div className="space-y-3">
                  {teamMembers.slice(0, 3).map((member, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                        {member.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                        <p className="text-xs text-muted-foreground truncate">New message...</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Goals Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              {[
                { label: t('dashboard.goals.enrollment'), value: 85, color: "stroke-blue-500" },
                { label: t('dashboard.goals.revenue'), value: 72, color: "stroke-green-500" },
                { label: t('dashboard.goals.attendance'), value: 94, color: "stroke-purple-500" },
                { label: t('dashboard.goals.satisfaction'), value: 88, color: "stroke-orange-500" },
              ].map((goal, i) => (
                <div key={i} className="bg-card/60 border border-border/20 rounded-xl p-3 flex items-center gap-3">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg className="w-12 h-12 -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-muted/30"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className={goal.color}
                        strokeDasharray={`${goal.value * 1.26} 126`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">{goal.value}%</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground truncate">{goal.label}</p>
                    <div className="flex items-center gap-1">
                      <Target size={10} className="text-primary" />
                      <span className="text-xs text-primary">{t('dashboard.charts.onTrack')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative glow behind dashboard */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl -z-10 rounded-3xl" />
    </div>
  );
};

export default DashboardMockup;
