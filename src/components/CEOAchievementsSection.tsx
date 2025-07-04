import { Card, CardContent } from "@/components/ui/card";

const CEOAchievementsSection = () => {
  const achievements = [
    {
      image: "/ceosubbu.jpg",
      title: "Google for Startups"
    },
    {
      image: "/subbu.png", 
      title: "Startup India Recognition"
    },
    {
      image: "/ceosubbu.jpg",
      title: "Innovation Hub Partner"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">CEO </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow-orange transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 mx-auto mb-6">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-electric-orange">
                  {achievement.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">CineSlice</span> is powered by{" "}
            <span className="text-cyber-blue">Google Startup</span>,{" "}
            <span className="text-electric-orange">Startup India</span>,{" "}
            <span className="text-vibrant-violet">Innovations Hub</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOAchievementsSection;