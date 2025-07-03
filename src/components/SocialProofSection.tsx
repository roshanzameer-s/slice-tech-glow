const SocialProofSection = () => {
  const socialStats = [
    {
      platform: "YouTube",
      count: "800K+",
      icon: "📺",
      color: "neon-red",
      description: "Subscribers learning daily"
    },
    {
      platform: "Instagram",
      count: "210K+",
      icon: "📸",
      color: "vibrant-violet",
      description: "Creative community"
    },
    {
      platform: "LinkedIn",
      count: "750K+",
      icon: "💼",
      color: "cyber-blue",
      description: "Professional network"
    },
    {
      platform: "Twitter",
      count: "160K+",
      icon: "🐦",
      color: "electric-orange",
      description: "Tech enthusiasts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Join Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Creative Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of creators, developers, and innovators across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialStats.map((social, index) => (
            <div
              key={index}
              className={`group bg-gradient-card p-8 rounded-2xl border border-border hover:shadow-glow-${social.color} transition-all duration-500 hover:scale-105 animate-scale-in cursor-pointer`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {social.platform}
                </h3>
                
                <div className={`text-4xl font-bold text-${social.color} mb-3`}>
                  {social.count}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {social.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Follow us for daily tips, tutorials, and career guidance
          </p>
          <div className="flex justify-center gap-4">
            {socialStats.map((social, index) => (
              <button
                key={index}
                className={`w-12 h-12 rounded-full border-2 border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-background transition-all duration-300 hover:scale-110`}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;