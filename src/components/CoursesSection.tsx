import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: "vfx",
      title: "VFX & Animation",
      subtitle: "Create Hollywood-level visual effects",
      description: "Master After Effects, Cinema 4D, and industry workflows",
      icon: "🎬",
      color: "electric-orange",
      gradient: "from-electric-orange/20 to-transparent"
    },
    {
      id: "design",
      title: "Graphic Design",
      subtitle: "Design that tells compelling stories",
      description: "Adobe Creative Suite, branding, and design thinking",
      icon: "🎨",
      color: "cyber-blue",
      gradient: "from-cyber-blue/20 to-transparent"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      subtitle: "Protect the digital world",
      description: "Ethical hacking, network security, and penetration testing",
      icon: "🔒",
      color: "vibrant-violet",
      gradient: "from-vibrant-violet/20 to-transparent"
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      subtitle: "Design user-centered experiences",
      description: "Figma, user research, prototyping, and design systems",
      icon: "📱",
      color: "neon-red",
      gradient: "from-neon-red/20 to-transparent"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      subtitle: "Tell stories through motion",
      description: "Premier Pro, DaVinci Resolve, and storytelling techniques",
      icon: "🎥",
      color: "electric-orange",
      gradient: "from-electric-orange/20 to-transparent"
    },
    {
      id: "programming",
      title: "Programming",
      subtitle: "Build the future with code",
      description: "Full-stack development, Python, JavaScript, and more",
      icon: "💻",
      color: "cyber-blue",
      gradient: "from-cyber-blue/20 to-transparent"
    }
  ];

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Explore Our </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of creative and technical courses designed for the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className={`group cursor-pointer bg-gradient-card border-border hover:shadow-glow-${course.color} transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCourseClick(course.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8 text-center">
                <div className="text-6xl mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {course.title}
                </h3>
                
                <p className={`text-${course.color} font-medium mb-4`}>
                  {course.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className={`group-hover:text-${course.color} group-hover:border-${course.color} transition-colors duration-300`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;