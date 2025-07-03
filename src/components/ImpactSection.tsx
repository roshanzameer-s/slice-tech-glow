import { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="font-bold text-4xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const stats = [
    { number: 100, suffix: "+", label: "Students Trained", icon: "👨‍🎓" },
    { number: 10, suffix: "+", label: "Career Tracks", icon: "🚀" },
    { number: 100, suffix: "%", label: "Practical Training", icon: "💻" },
    { number: 95, suffix: "%", label: "Job Success Rate", icon: "💼" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Learners </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with CineSlice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-gradient-card p-8 rounded-2xl border border-border hover:shadow-glow-blue transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {stat.icon}
                </div>
                <div className="mb-4">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;