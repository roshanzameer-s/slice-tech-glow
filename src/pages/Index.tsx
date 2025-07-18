import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import WhyCineSliceSection from "@/components/WhyCineSliceSection";
import CoursesSection from "@/components/CoursesSection";
import SocialProofSection from "@/components/SocialProofSection";
import LearningPathSection from "@/components/LearningPathSection";
import InstructorSection from "@/components/InstructorSection";
import TeamSection from "@/components/TeamSection";
import CEOAchievementsSection from "@/components/CEOAchievementsSection";
import InvestorsBlogSection from "@/components/InvestorsBlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ImpactSection />
      <WhyCineSliceSection />
      <CoursesSection />
      <SocialProofSection />
      <LearningPathSection />
      <InstructorSection />
      <TeamSection />
      <CEOAchievementsSection />
      <InvestorsBlogSection />
      <Footer />
    </div>
  );
};

export default Index;
