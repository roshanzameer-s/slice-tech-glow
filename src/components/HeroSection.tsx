import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import LoginDialog from "@/components/LoginDialog";

const HeroSection = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    coursesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-electric-orange rounded-full animate-float opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyber-blue rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-vibrant-violet rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-red rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-10 right-10 w-1 h-1 bg-electric-orange rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-20 left-10 w-2 h-2 bg-cyber-blue rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-40 left-1/2 w-1 h-1 bg-vibrant-violet rounded-full animate-float opacity-90" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-40 right-1/2 w-1 h-1 bg-neon-red rounded-full animate-pulse opacity-70" style={{ animationDelay: '2.5s' }} />
        
        {/* Moving Stars */}
        <div className="absolute animate-slide-horizontal">
          <div className="w-1 h-1 bg-electric-orange rounded-full opacity-80" />
        </div>
        <div className="absolute animate-slide-diagonal" style={{ animationDelay: '2s' }}>
          <div className="w-1 h-1 bg-cyber-blue rounded-full opacity-70" />
        </div>
        <div className="absolute animate-slide-vertical" style={{ animationDelay: '4s' }}>
          <div className="w-1 h-1 bg-vibrant-violet rounded-full opacity-60" />
        </div>
      </div>

      {/* Login Button */}
      <div className="absolute top-6 right-6 z-20">
        <LoginDialog />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8 animate-fade-in-up">
          <img 
            src="/lovable-uploads/d54593f0-e237-4f87-bc17-689246a69830.png" 
            alt="CineSlice Logo" 
            className="mx-auto h-40 md:h-60 object-contain"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Advance Your Career
          </span>
          <br />
          <span className="text-foreground">
            with Creative Tech Courses
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Learn VFX, Design, Programming, Cybersecurity and more — with expert guidance, 
          hybrid learning, and job support.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up mb-16" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToCourses}
            className="text-lg px-12 py-6 h-auto"
          >
            Start for Free
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            className="text-lg px-12 py-6 h-auto"
          >
            Explore Plus
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-12 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-orange rounded-full mt-2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;