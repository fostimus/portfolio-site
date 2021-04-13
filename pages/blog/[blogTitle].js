import { PageLayout, SectionLayout } from "@layout";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { blogTitle } = router.query;

  return (
    <PageLayout theme="light" footerTheme="light">
      <SectionLayout>Slug is: {blogTitle}</SectionLayout>
    </PageLayout>
  );
}
