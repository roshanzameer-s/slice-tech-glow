import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Subramanyam Chowdary",
      role: "Chief Executive Officer & Founder",
      description: "Leading a team of exceptional individuals, revolutionizing education and creating opportunities that transform lives.",
      skills: ["Visionary Leader", "Mission-Driven", "Team Builder"],
      image: "/subbu.png"
    },
    {
      name: "Bhavya Sree",
      role: "Co-Founder",
      description: "Passionate about creating innovative learning experiences and building strong educational foundations.",
      skills: ["Strategic Planning", "Innovation", "Leadership"],
      image: "/bhavya.png"
    },
    {
      name: "Roshan Zameer",
      role: "Chief Technology Officer",
      description: "Technology enthusiast driving digital transformation and technical excellence.",
      skills: ["Technology Strategy", "Innovation", "System Architecture"],
      image: "/roshan.jpg"
    },
    {
      name: "Mohith K",
      role: "Chief Operating Officer",
      description: "Operational excellence expert ensuring smooth delivery of educational programs.",
      skills: ["Operations Management", "Process Optimization", "Quality Assurance"],
      contact: {
        phone: "+91 779 928 43 20",
        email: "mohith@cineslice.com"
      },
      image: "/mohith.jpg"
    },
    {
      name: "Rajesh",
      role: "Chief Financial Officer",
      description: "Financial strategist ensuring sustainable growth and resource optimization.",
      skills: ["Financial Planning", "Strategic Analysis", "Growth Management"],
      image: "/rajesh.jpg"
    },
    {
      name: "Balaji",
      role: "Project Manager",
      description: "Project management expert delivering successful outcomes and managing complex initiatives.",
      skills: ["Project Management", "Team Coordination", "Delivery Excellence"],
      image: "/balaji.jpg"
    },
    {
      name: "Arshad",
      role: "Head of Growth",
      description: "Growth specialist focused on expanding reach and building strategic partnerships.",
      skills: ["Growth Strategy", "Marketing", "Partnership Development"],
      image: "/arshad.jpg"
    },
    {
      name: "Jahnavi",
      role: "Junior Designer Mentor",
      description: "Creative mentor passionate about guiding learners in UI/UX and graphic design, blending practical skills with real-world applications.",
      skills: ["UI/UX Design", "Graphic Design", "Figma", "Adobe Suite", "Design Mentorship", "User-Centered Design"],
      image: "/jahnavi.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Know Our </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate professionals behind CineSlice's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-glow-orange transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary p-1 mx-auto mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm text-electric-orange font-semibold mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-secondary text-xs rounded-full text-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {member.skills.length > 3 && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.slice(3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-full text-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {member.contact && (
                    <div className="text-center pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">{member.contact.phone}</p>
                      <p className="text-xs text-cyber-blue">{member.contact.email}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;