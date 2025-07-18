import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LearningPathSection = () => {
  const [activeTab, setActiveTab] = useState("vfx");

  const learningPaths = {
    vfx: {
      title: "Visual Effects",
      description: "Master the art of digital magic",
      highlights: [
        "Industry-standard software (After Effects, Cinema 4D, Nuke)",
        "Real Hollywood-style projects",
        "Compositing and motion graphics",
        "Portfolio development with showreel creation"
      ],
      tools: ["After Effects", "Cinema 4D", "Nuke", "Blender"],
      duration: "6 months",
      projects: "15+ VFX projects",
      image: "🎬",
      price:"2999-3999"
    },
    programming: {
      title: "Programming",
      description: "Build powerful applications from scratch",
      highlights: [
        "Full-stack web development",
        "Python for automation and AI",
        "JavaScript frameworks (React, Node.js)",
        "Database design and cloud deployment"
      ],
      tools: ["React", "Python", "Node.js", "MongoDB","Java"],
      duration: "8 months",
      projects: "20+ coding projects",
      image: "💻",
      price:"999-1499"
    },
    design: {
      title: "Design",
      description: "Create visually stunning experiences",
      highlights: [
        "UI/UX design principles",
        "Brand identity and logo design",
        "Adobe Creative Suite mastery",
        "Design thinking methodology"
      ],
      tools: ["Figma", "Photoshop", "Illustrator", "XD"],
      duration: "5 months",
      projects: "12+ design projects",
      image: "🎨",
      price:"1499-2999"
    },
    interview: {
      title: "Interview Experience",
      description: "Ace your dream job interviews",
      highlights: [
        "Mock interview sessions",
        "Portfolio presentation skills",
        "Industry-specific question banks",
        "Salary negotiation strategies"
      ],
      tools: ["Portfolio", "Resume", "LinkedIn", "GitHub"],
      duration: "2 months",
      projects: "Complete job readiness",
      image: "💼",
      prices:"1999-2999"
    }
  };

  const tabs = [
    { id: "vfx", label: "Visual Effects", icon: "🎬" },
    { id: "programming", label: "Programming", icon: "💻" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "interview", label: "Interview Experience", icon: "💼" }
  ];

  const currentPath = learningPaths[activeTab as keyof typeof learningPaths];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Revolutionize the Way </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">You Learn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and transform your career with structured, hands-on training
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? 'bg-gradient-primary text-background shadow-glow-orange'
                  : 'bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <div className="text-8xl mb-6 text-center lg:text-left animate-float">
              {currentPath.image}
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              {currentPath.title}
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8">
              {currentPath.description}
            </p>

            <div className="space-y-4 mb-8">
              {currentPath.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-cyber-blue">
                  {currentPath.duration}
                </div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-vibrant-violet">
                  {currentPath.projects}
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-neon-red">
                  {currentPath.tools.length}+
                </div>
                <div className="text-sm text-muted-foreground">Tools</div>
              </div>
            </div>

            <Button variant="glow" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>

          {/* Right: Tools & Interface Preview */}
          <div className="animate-scale-in">
            <Card className="bg-gradient-card border-border shadow-elevated">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 text-foreground">
                  Tools You'll Master
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentPath.tools.map((tool, index) => (
                    <div 
                      key={index}
                      className="bg-secondary p-4 rounded-lg border border-border text-center hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
                    >
                      <div className="font-medium text-foreground">{tool}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-electric-orange/10 to-cyber-blue/10 p-6 rounded-lg border border-electric-orange/20">
                  <h5 className="font-bold text-foreground mb-2">Course Interface Preview</h5>
                  <p className="text-muted-foreground text-sm">
                    Interactive lessons, live coding sessions, and hands-on projects designed for maximum engagement and learning retention.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;