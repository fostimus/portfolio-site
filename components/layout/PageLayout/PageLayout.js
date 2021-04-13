import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./pageLayout.module.scss";
import { ThemeContext } from "globalState";
import { useContext } from "react";
import PropTypes from "prop-types";

export const siteTitle = "Portfolio Website";

export default function PageLayout({ children, theme, footerTheme }) {
  const currentTheme = theme ? theme : useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className={styles[currentTheme]}>
        <Head>
          <link
            rel="shortcut icon"
            href="/favicon.ico?v=2"
            type="image/x-icon"
          />

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
        <Footer theme={footerTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.string,
  footerTheme: PropTypes.string,
};
