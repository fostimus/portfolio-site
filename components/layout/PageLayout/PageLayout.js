import Head from "next/head";
import Link from "next/link";
import Navigation from "../Navigation";
import Footer from "../Footer";

const name = "Derek Foster";
export const siteTitle = "Portfolio Website";

export default function PageLayout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Derek Foster's Portfolio & Blog" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
