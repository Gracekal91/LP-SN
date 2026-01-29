import { Bell, Calendar, CreditCard, MessageSquare, User, BookOpen, Wifi, Battery, Signal } from "lucide-react";

const IPhoneMockup = () => {
  return (
    <div className="relative animate-float-premium">
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75 animate-pulse-slow" />
      
      {/* iPhone 15 Pro Max Frame */}
      <div className="relative">
        {/* Titanium Frame */}
        <div className="relative w-[300px] md:w-[340px] rounded-[55px] p-[3px] bg-gradient-to-b from-[hsl(220,20%,35%)] via-[hsl(220,15%,25%)] to-[hsl(220,20%,20%)]">
          {/* Inner frame shadow */}
          <div className="absolute inset-[3px] rounded-[52px] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
          
          {/* Side buttons - Volume */}
          <div className="absolute -left-[3px] top-[120px] w-[3px] h-[35px] bg-gradient-to-r from-[hsl(220,15%,30%)] to-[hsl(220,15%,25%)] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[165px] w-[3px] h-[65px] bg-gradient-to-r from-[hsl(220,15%,30%)] to-[hsl(220,15%,25%)] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[240px] w-[3px] h-[65px] bg-gradient-to-r from-[hsl(220,15%,30%)] to-[hsl(220,15%,25%)] rounded-l-sm" />
          
          {/* Side buttons - Power */}
          <div className="absolute -right-[3px] top-[180px] w-[3px] h-[90px] bg-gradient-to-l from-[hsl(220,15%,30%)] to-[hsl(220,15%,25%)] rounded-r-sm" />
          
          {/* Screen bezel */}
          <div className="bg-[hsl(220,30%,6%)] rounded-[52px] p-[12px]">
            {/* Actual Screen */}
            <div className="relative bg-background rounded-[40px] overflow-hidden aspect-[9/19.5]">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[hsl(220,30%,4%)] rounded-full z-20 flex items-center justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[hsl(220,30%,8%)] ring-1 ring-[hsl(220,20%,15%)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[hsl(220,30%,10%)]" />
              </div>
              
              {/* Screen Content */}
              <div className="relative h-full pt-14 px-5 pb-8">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-6 text-xs text-foreground/80">
                  <span className="font-semibold">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal size={14} />
                    <Wifi size={14} />
                    <div className="flex items-center gap-0.5">
                      <Battery size={18} />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] text-muted-foreground">Welcome back</p>
                    <p className="text-sm font-semibold text-foreground">Sarah Johnson</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center ring-2 ring-primary/20">
                    <Bell size={14} className="text-primary" />
                  </div>
                </div>

                {/* Quick Stats Card */}
                <div className="glass-card p-4 mb-5 rounded-2xl border border-primary/10">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Term Progress</p>
                    <span className="text-xs font-bold text-primary">75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-3/4 h-full gradient-accent rounded-full relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { icon: Calendar, label: "Timetable", color: "from-blue-500 to-blue-600" },
                    { icon: MessageSquare, label: "Messages", color: "from-green-500 to-green-600" },
                    { icon: CreditCard, label: "Fees", color: "from-yellow-500 to-yellow-600" },
                    { icon: BookOpen, label: "Results", color: "from-purple-500 to-purple-600" },
                    { icon: User, label: "Profile", color: "from-pink-500 to-pink-600" },
                    { icon: Bell, label: "Alerts", color: "from-orange-500 to-orange-600" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card p-3 rounded-xl flex flex-col items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer border border-border/20"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon size={14} className="text-white" />
                      </div>
                      <span className="text-[9px] text-muted-foreground font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="glass-card p-4 rounded-xl border border-border/20">
                  <p className="text-[10px] font-semibold text-foreground mb-3 uppercase tracking-wider">Recent Activity</p>
                  <div className="space-y-3">
                    {[
                      { text: "Math test results posted", time: "2h ago", dot: "bg-green-500" },
                      { text: "Fee payment received", time: "1d ago", dot: "bg-blue-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                        <span className="text-[10px] text-muted-foreground flex-1">{item.text}</span>
                        <span className="text-[9px] text-muted-foreground/50">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
              </div>
              
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Reflection/shine on frame */}
        <div className="absolute top-0 right-8 w-1 h-48 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default IPhoneMockup;
