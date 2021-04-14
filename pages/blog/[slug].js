import { PageLayout, SectionLayout } from "@layout";
import BlogPost from "../../components/blog/BlogPost";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";

export function getStaticProps(query) {
  const slug = query?.params?.blogTitle;

  return {
    props: {
      slug,
      meta: require(`../../content/blog/posts/${slug}.mdx`).meta,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await fs.promises.readdir(
    path.join(process.cwd(), "content/blog/posts")
  );

  console.log(slugs);

  return {
    paths: slugs?.map((slug) => {
      slug = slug.replace(".mdx", "");
      return { params: { slug } };
    }),
    fallback: false, // In a static-only build, we don't need fallback rendering.
  };
}

export default function PostPage({ slug, meta }) {
  // const router = useRouter();
  // const { blogTitle } = router.query;

  // const Mdx = dynamic(() => import(`../../content/blog/posts/${slug}.mdx`));

  return (
    <PageLayout theme="light" footerTheme="light">
      <SectionLayout>Slug is: {slug}</SectionLayout>
    </PageLayout>
  );
}
