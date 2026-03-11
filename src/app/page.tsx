import { HeroSection } from '@/components/home/HeroSection';
import { BuiltForGulf } from '@/components/home/BuiltForGulf';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { WhyZubda } from '@/components/home/WhyZubda';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import { EnterpriseTeaser } from '@/components/home/EnterpriseTeaser';
import { SocialProof } from '@/components/home/SocialProof';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BuiltForGulf />
      <FeatureGrid />
      <WhyZubda />
      <ComparisonTable />
      <EnterpriseTeaser />
      <SocialProof />
    </>
  );
}
