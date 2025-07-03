import { Card, CardContent } from "@/components/ui/card";

const AlumniSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "VFX Artist at Sony Pictures",
      company: "Sony Pictures",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      quote: "CineSlice's VFX course transformed my career. The hands-on projects and industry mentorship helped me land my dream job at Sony Pictures.",
      course: "VFX & Animation"
    },
    {
      name: "Rahul Kumar",
      role: "UI/UX Designer at Google",
      company: "Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The design thinking approach and real-world projects at CineSlice gave me the confidence to work at top tech companies.",
      course: "UI/UX Design"
    },
    {
      name: "Ananya Patel",
      role: "Cybersecurity Analyst at TCS",
      company: "TCS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The cybersecurity program is incredibly comprehensive. I went from beginner to working at TCS in just 8 months.",
      course: "Cybersecurity"
    },
    {
      name: "Arjun Singh",
      role: "Full Stack Developer at Amazon",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "CineSlice's programming bootcamp is intense but incredibly rewarding. The job support was phenomenal.",
      course: "Programming"
    },
    {
      name: "Sneha Reddy",
      role: "Video Editor at Netflix",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "The video editing course taught me industry-standard techniques. Now I'm working on Netflix originals!",
      course: "Video Editing"
    },
    {
      name: "Vikram Gupta",
      role: "Graphic Designer at Adobe",
      company: "Adobe",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "From learning basics to mastering advanced design principles, CineSlice prepared me for a career at Adobe.",
      course: "Graphic Design"
    }
  ];

  const companyLogos = [
    { name: "Google", color: "text-blue-500" },
    { name: "Amazon", color: "text-yellow-500" },
    { name: "Netflix", color: "text-red-500" },
    { name: "Adobe", color: "text-red-600" },
    { name: "Sony", color: "text-blue-600" },
    { name: "TCS", color: "text-purple-500" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Alumni </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our graduates are working at the world's top companies
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          {companyLogos.map((company, index) => (
            <div 
              key={index}
              className={`text-2xl font-bold ${company.color} hover:scale-110 transition-transform duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company.name}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:shadow-glow-violet transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-electric-orange"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-cyber-blue font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-electric-orange/10 border border-electric-orange/20">
                  <span className="text-sm text-electric-orange font-medium">
                    {testimonial.course}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;