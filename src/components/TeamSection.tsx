import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Subramanyam Chowdary",
      role: "Chief Executive Officer & Founder",
      description: "Leading a team of exceptional individuals, revolutionizing education and creating opportunities that transform lives.",
      skills: ["Visionary Leader", "Mission-Driven", "Team Builder"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Bhavya Sree",
      role: "Co-Founder",
      description: "Passionate about creating innovative learning experiences and building strong educational foundations.",
      skills: ["Strategic Planning", "Innovation", "Leadership"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Roshan Zameer",
      role: "Chief Technology Officer",
      description: "Technology enthusiast driving digital transformation and technical excellence.",
      skills: ["Technology Strategy", "Innovation", "System Architecture"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mohith K",
      role: "Chief Operating Officer",
      description: "Operational excellence expert ensuring smooth delivery of educational programs.",
      skills: ["Operations Management", "Process Optimization", "Quality Assurance"],
      contact: {
        phone: "+91 xxxx xxxx xx",
        email: "mohith@cineslice.com"
      },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rajesh",
      role: "Chief Financial Officer",
      description: "Financial strategist ensuring sustainable growth and resource optimization.",
      skills: ["Financial Planning", "Strategic Analysis", "Growth Management"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Balaji",
      role: "Project Manager",
      description: "Project management expert delivering successful outcomes and managing complex initiatives.",
      skills: ["Project Management", "Team Coordination", "Delivery Excellence"],
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Arshad",
      role: "Head of Growth",
      description: "Growth specialist focused on expanding reach and building strategic partnerships.",
      skills: ["Growth Strategy", "Marketing", "Partnership Development"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Jahnavi",
      role: "Junior Designer Mentor",
      description: "Creative mentor passionate about guiding learners in UI/UX and graphic design, blending practical skills with real-world applications.",
      skills: ["UI/UX Design", "Graphic Design", "Figma", "Adobe Suite", "Design Mentorship", "User-Centered Design"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
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