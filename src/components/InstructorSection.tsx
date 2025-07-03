import { Card, CardContent } from "@/components/ui/card";

const InstructorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet Your </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Mentor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts who have worked with top companies and shipped real products
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-elevated overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-electric-orange/20 to-cyber-blue/20 p-8 lg:p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-primary p-1 animate-glow-pulse">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        alt="Subramanyam Chowdary"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 bg-cyber-blue text-background px-3 py-1 rounded-full text-sm font-medium animate-float">
                      Founder
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-vibrant-violet text-background px-3 py-1 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
                      10+ Years
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Subramanyam Chowdary
                  </h3>
                  
                  <p className="text-xl text-electric-orange font-semibold mb-6">
                    Founder & Lead Instructor at CineSlice
                  </p>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Creative mentor with over 10 years of experience in production, design, 
                      and tech-driven education. Subramanyam has worked with leading studios 
                      and tech companies, bringing real-world expertise to every lesson.
                    </p>
                    
                    <p>
                      His passion for teaching and innovation has helped thousands of students 
                      transition into successful careers in creative technology fields.
                    </p>
                  </div>

                  {/* Experience Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-secondary rounded-lg border border-border">
                      <div className="text-2xl font-bold text-electric-orange">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg border border-border">
                      <div className="text-2xl font-bold text-cyber-blue">50K+</div>
                      <div className="text-sm text-muted-foreground">Students Taught</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg border border-border">
                      <div className="text-2xl font-bold text-vibrant-violet">100+</div>
                      <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                  </div>

                  {/* Company Experience */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      Previously worked with:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {['Adobe', 'Google', 'Netflix', 'Sony Pictures'].map((company, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-electric-orange/10 to-cyber-blue/10 border border-electric-orange/20 rounded-full text-sm text-foreground"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;