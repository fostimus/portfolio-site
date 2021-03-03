import { PageLayout, SectionLayout } from "../components/layout";
import Image from "next/image";
// import resume from "../content/resume.png";

// export async function getStaticProps() {
//   return {
//     props: {
//       resume
//     }
//   };
// }

export default function Resume({ resume }) {
  return (
    <PageLayout>
      <SectionLayout sectionNo={1} theme="dark">
        <Image src={"/resume.png"} width={2550} height={3300} />
      </SectionLayout>
    </PageLayout>
  );
}
