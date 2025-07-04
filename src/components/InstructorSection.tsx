import { Card, CardContent } from "@/components/ui/card";

const InstructorSection = () => {
  const mentors = [
    {
      name: "Subramanyam Chowdary",
      role: "Founder & Lead Instructor",
      image: "C:/Users/rosha/Desktop/CS/slice-tech-glow/public/ceosubbu.jpg",
      badge: "Founder"
    },
    {
      name: "Roshan Zameer",
      role: "CTO & Tech Mentor",
      image: "/public/roshan.jpg",
      badge: "CTO"
    },
    {
      name: "Jahnavi",
      role: "Junior Design Mentor",
      image: "/public/jahnavi.jpg",
      badge: "Mentor"
    },
    {
      name: "Mohith",
      role: "Cyber Security Tech Assistant",
      image: "/public/mohith.jpg",
      badge: "Co-Founder"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet Your </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 mx-auto">
                    <img 
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-cyber-blue text-background px-2 py-1 rounded-full text-xs font-medium">
                    {mentor.badge}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {mentor.name}
                </h3>
                
                <p className="text-sm text-electric-orange font-medium">
                  {mentor.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;