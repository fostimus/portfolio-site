import { PageLayout, SectionLayout } from "@layout";
import LandingSection from "../../components/landing-section"

export default function BlogHomePage({ tagline, skills, socials }) {
  return (
    <PageLayout>
      <SectionLayout sectionNo={1}>
        <LandingSection tagline="blog" desc="Frontend Development" />
      </SectionLayout>
    </PageLayout>
  );
}
