import { Card, CardContent } from "@/components/ui/card";

const WhyCineSliceSection = () => {
  const features = [
    {
      title: "Industry-Ready Projects",
      description: "Work on real-world projects that prepare you for industry challenges",
      icon: "🚀"
    },
    {
      title: "1-on-1 Doubt Support",
      description: "Personal mentorship and dedicated support for all your queries",
      icon: "💬"
    },
    {
      title: "Job Assistance",
      description: "Complete placement support and career guidance",
      icon: "💼"
    },
    {
      title: "Film & Design Focused",
      description: "Specialized curriculum for creative and technical fields",
      icon: "🎬"
    },
    {
      title: "Hybrid Learning Mode",
      description: "Flexible online and offline learning options",
      icon: "🌐"
    },
    {
      title: "Small Batch Teaching",
      description: "Personalized attention with limited batch sizes",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">CineSlice?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our unique approach to creative and technical education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow-blue transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCineSliceSection;