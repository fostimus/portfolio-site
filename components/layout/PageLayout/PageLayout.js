import Head from "next/head";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./pageLayout.module.scss";
import { ThemeContext } from "../../../state";
import { useContext } from "react";

const name = "Derek Foster";
export const siteTitle = "Portfolio Website";

export default function PageLayout({ children, theme }) {
  const currentTheme = theme ? theme : useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className={styles["" + currentTheme]}>
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
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
