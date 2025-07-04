const SocialProofSection = () => {
  const socialStats = [
    {
      platform: "YouTube",
      count: "8K+",
      icon: "📺",
      color: "neon-red",
      description: "Subscribers learning daily",
      link: "https://www.youtube.com/watch?v=TrDGw3iegt0" // Replace with your actual link
    },
    {
      platform: "Instagram",
      count: "5K+",
      icon: "📸",
      color: "vibrant-violet",
      description: "Creative community",
      link: "https://www.instagram.com/cineslice.in/"
    },
    {
      platform: "LinkedIn",
      count: "1k+",
      icon: "💼",
      color: "cyber-blue",
      description: "Professional network",
      link: "https://www.linkedin.com/company/cineslice/posts/?feedView=all"
    },
    {
      platform: "Twitter",
      count: "15K+",
      icon: "🐦",
      color: "electric-orange",
      description: "Tech enthusiasts",
      link: "https://twitter.com/yourhandle"
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
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`bg-gradient-card p-8 rounded-2xl border border-border hover:shadow-glow-${social.color} transition-all duration-500 hover:scale-105 animate-scale-in cursor-pointer`}
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
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Follow us for daily tips, tutorials, and career guidance
          </p>
          <div className="flex justify-center gap-4">
            {socialStats.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`w-12 h-12 rounded-full border-2 border-${social.color} text-${social.color} hover:bg-${social.color} hover:text-background transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
