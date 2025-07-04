import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InvestorsBlogSection = () => {
  const handleJoinClick = () => {
    // Open PPT in new tab
    window.open("https://docs.google.com/presentation/d/your-presentation-id/edit", "_blank");
    // Open Google Form in new tab
    setTimeout(() => {
      window.open("https://forms.google.com/your-form-id", "_blank");
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Investors </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in revolutionizing creative and technical education
          </p>
        </div>

        <Card className="bg-gradient-card border-border hover:shadow-glow-blue transition-all duration-500 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Become Our <span className="text-electric-orange">Partner</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                CineSlice is at the forefront of creative and technical education, training the next generation of professionals in VFX, Design, Programming, and Cybersecurity. Our innovative approach combines industry expertise with practical learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're seeking strategic partners who share our vision of transforming education and creating opportunities for students worldwide. Join us in building the future of creative technology education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold text-cyber-blue mb-2">Rapid Growth</h4>
                <p className="text-sm text-muted-foreground">100+ students trained with 95% success rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-electric-orange mb-2">Market Focus</h4>
                <p className="text-sm text-muted-foreground">Targeting high-demand creative tech skills</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold text-vibrant-violet mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Hybrid learning with industry partnerships</p>
              </div>
            </div>

            <Button 
              variant="glow" 
              size="lg"
              onClick={handleJoinClick}
              className="text-lg px-8 py-4 animate-pulse hover:animate-none"
            >
              Join as Partner
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Click to view our presentation and partnership form
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InvestorsBlogSection;