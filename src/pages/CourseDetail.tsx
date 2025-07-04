import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseData = {
    vfx: {
      title: "VFX & Animation Mastery",
      subtitle: "Create Hollywood-level visual effects",
      description: "Master the art of digital magic with industry-standard tools and techniques used in major motion pictures.",
      duration: "6 months",
      level: "Beginner to Advanced",
      format: "Online + Offline",
      icon: "🎬",
      color: "electric-orange",
      highlights: [
        "Master After Effects, Cinema 4D, and Nuke",
        "Real Hollywood-style project portfolio",
        "Compositing and motion graphics",
        "Green screen and rotoscoping techniques",
        "Particle systems and simulations",
        "Professional showreel creation"
      ],
      tools: ["After Effects", "Cinema 4D", "Nuke", "Blender", "DaVinci Resolve"],
      projects: [
        "Superhero movie VFX sequence",
        "Product advertisement with CGI",
        "Music video with advanced compositing",
        "Short film with creature animation"
      ],
      career: [
        "VFX Artist at film studios",
        "Motion Graphics Designer",
        "Compositor for streaming platforms",
        "Freelance VFX specialist"
      ]
    },
    design: {
      title: "Graphic Design Professional",
      subtitle: "Design that tells compelling stories",
      description: "Transform ideas into stunning visual communications that captivate audiences and drive results.",
      duration: "5 months",
      level: "Beginner to Advanced",
      format: "Online + Offline",
      icon: "🎨",
      color: "cyber-blue",
      highlights: [
        "Adobe Creative Suite mastery",
        "Brand identity and logo design",
        "Print and digital design principles",
        "Typography and color theory",
        "Client presentation skills",
        "Professional portfolio development"
      ],
      tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "After Effects"],
      projects: [
        "Complete brand identity package",
        "Magazine layout design",
        "Social media campaign",
        "Packaging design project"
      ],
      career: [
        "Graphic Designer at agencies",
        "Brand Designer for startups",
        "Freelance design consultant",
        "Art Director at media companies"
      ]
    },
    cybersecurity: {
      title: "Cybersecurity Expert",
      subtitle: "Protect the digital world",
      description: "Become a guardian of digital assets with cutting-edge cybersecurity knowledge and practical skills.",
      duration: "8 months",
      level: "Intermediate to Advanced",
      format: "Online + Lab Sessions",
      icon: "🔒",
      color: "vibrant-violet",
      highlights: [
        "Ethical hacking and penetration testing",
        "Network security and firewall management",
        "Incident response and forensics",
        "Cloud security best practices",
        "Security compliance and auditing",
        "Industry certifications preparation"
      ],
      tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap"],
      projects: [
        "Penetration testing of web applications",
        "Network security audit",
        "Incident response simulation",
        "Security policy development"
      ],
      career: [
        "Cybersecurity Analyst",
        "Penetration Tester",
        "Security Consultant",
        "Information Security Manager"
      ]
    },
    uiux: {
      title: "UI/UX Design Master",
      subtitle: "Design user-centered experiences",
      description: "Create intuitive and beautiful user experiences that solve real problems and delight users.",
      duration: "5 months",
      level: "Beginner to Advanced",
      format: "Online + Offline",
      icon: "📱",
      color: "neon-red",
      highlights: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Design systems and style guides",
        "Usability testing and iteration",
        "Mobile and web app design",
        "Professional portfolio creation"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      projects: [
        "Mobile app redesign project",
        "E-commerce website design",
        "Design system for startup",
        "User research case study"
      ],
      career: [
        "UI/UX Designer at tech companies",
        "Product Designer",
        "Design Consultant",
        "UX Researcher"
      ]
    },
    "video-editing": {
      title: "Video Editing Professional",
      subtitle: "Tell stories through motion",
      description: "Master the art of visual storytelling through professional video editing techniques and workflows.",
      duration: "4 months",
      level: "Beginner to Advanced",
      format: "Online + Offline",
      icon: "🎥",
      color: "electric-orange",
      highlights: [
        "Professional editing workflows",
        "Color grading and correction",
        "Audio design and mixing",
        "Motion graphics integration",
        "YouTube and social media optimization",
        "Client project management"
      ],
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "Final Cut Pro"],
      projects: [
        "Short documentary film",
        "Commercial advertisement",
        "YouTube channel setup",
        "Music video editing"
      ],
      career: [
        "Video Editor for studios",
        "YouTube Content Creator",
        "Freelance Editor",
        "Post-production Supervisor"
      ]
    },
    programming: {
      title: "Full Stack Programming",
      subtitle: "Build the future with code",
      description: "Master modern programming languages and frameworks to build powerful web applications from scratch.",
      duration: "8 months",
      level: "Beginner to Advanced",
      format: "Online + Coding Labs",
      icon: "💻",
      color: "cyber-blue",
      highlights: [
        "Full-stack web development",
        "Python for automation and AI",
        "JavaScript frameworks (React, Node.js)",
        "Database design and management",
        "Cloud deployment and DevOps",
        "Open source contribution"
      ],
      tools: ["React", "Python", "Node.js", "MongoDB", "AWS", "Git"],
      projects: [
        "E-commerce web application",
        "AI-powered chatbot",
        "Social media platform",
        "API development project"
      ],
      career: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Engineer"
      ]
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/')} variant="hero">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-background to-secondary py-4">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-electric-orange"
          >
            ← Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 animate-float">{course.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className={`text-${course.color}`}>{course.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {course.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-card p-4 rounded-lg border border-border text-center">
                  <div className={`text-2xl font-bold text-${course.color}`}>{course.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="bg-gradient-card p-4 rounded-lg border border-border text-center">
                  <div className={`text-lg font-bold text-${course.color}`}>{course.level}</div>
                  <div className="text-sm text-muted-foreground">Level</div>
                </div>
                <div className="bg-gradient-card p-4 rounded-lg border border-border text-center">
                  <div className={`text-lg font-bold text-${course.color}`}>{course.format}</div>
                  <div className="text-sm text-muted-foreground">Format</div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://forms.google.com/your-application-form', '_blank')}
              >
                Apply Now
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <Card className="bg-gradient-card border-border shadow-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">What You'll Learn</h3>
                  <div className="space-y-4">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-${course.color} rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Tools & </span>
            <span className={`text-${course.color}`}>Software</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {course.tools.map((tool, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-card border-border text-center p-6 hover:shadow-glow-${course.color} transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-0">
                  <div className="font-semibold text-foreground">{tool}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-foreground">Sample </span>
                <span className={`text-${course.color}`}>Projects</span>
              </h2>
              <div className="space-y-4">
                {course.projects.map((project, index) => (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-${course.color} rounded-full flex items-center justify-center text-background font-bold`}>
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">{project}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-foreground">Career </span>
                <span className={`text-${course.color}`}>Opportunities</span>
              </h2>
              <div className="space-y-4">
                {course.career.map((career, index) => (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">💼</div>
                        <span className="text-foreground font-medium">{career}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-orange/10 to-cyber-blue/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-foreground">Ready to Start Your </span>
            <span className={`text-${course.color}`}>Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have transformed their careers with CineSlice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://forms.google.com/your-application-form', '_blank')}
              >
                Apply Now
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://your-curriculum-ppt-link.com', '_blank')}
              >
                Download Curriculum
              </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;