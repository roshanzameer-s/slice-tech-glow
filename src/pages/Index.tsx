import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import AlumniSection from "@/components/AlumniSection";
import CoursesSection from "@/components/CoursesSection";
import SocialProofSection from "@/components/SocialProofSection";
import LearningPathSection from "@/components/LearningPathSection";
import InstructorSection from "@/components/InstructorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ImpactSection />
      <AlumniSection />
      <CoursesSection />
      <SocialProofSection />
      <LearningPathSection />
      <InstructorSection />
      <Footer />
    </div>
  );
};

export default Index;
