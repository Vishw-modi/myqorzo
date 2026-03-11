import Hero from "@/app/components/sections/Hero";
import Disease from "@/app/components/sections/Disease";
import DiagnosisJourney from "@/app/components/sections/DiagnosisJourney";
import UnmetNeed from "@/app/components/sections/UnmetNeed";
import IntroducingMyqorzo from "@/app/components/sections/IntroducingMyqorzo";
import MechanismOfAction from "@/app/components/sections/MechanismOfAction";
import DevelopmentTimeline from "@/app/components/sections/DevelopmentTimeline";
import ClinicalTrials from "@/app/components/sections/ClinicalTrials";
import SafetyProfile from "@/app/components/sections/SafetyProfile";
import REMSProgram from "@/app/components/sections/REMSProgram";
import Epidemiology from "@/app/components/sections/Epidemiology";
import MarketAnalysis from "@/app/components/sections/MarketAnalysis";
import CompetitorAnalysis from "@/app/components/sections/CompetitorAnalysis";
import CommercialOutlook from "@/app/components/sections/CommercialOutlook";
import SWOTAnalysis from "@/app/components/sections/SWOTAnalysis";
import KeyTakeaways from "@/app/components/sections/KeyTakeaways";
import Footer from "@/app/components/sections/Footer";
import ScrollProgress from "@/app/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main-content">
        <Hero />
        <Disease />
        <DiagnosisJourney />
        <UnmetNeed />
        <IntroducingMyqorzo />
        <MechanismOfAction />
        <DevelopmentTimeline />
        <ClinicalTrials />
        <SafetyProfile />
        <REMSProgram />
        <Epidemiology />
        <MarketAnalysis />
        <CompetitorAnalysis />
        <CommercialOutlook />
        <SWOTAnalysis />
        <KeyTakeaways />
      </main>
      <Footer />
    </>
  );
}
