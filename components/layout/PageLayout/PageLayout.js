import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./pageLayout.module.scss";
import { ThemeContext } from "globalState";
import { useContext } from "react";
import PropTypes from "prop-types";

const defaultTitle = "Derek Foster";

export default function PageLayout({
  children,
  theme,
  footerTheme,
  meta,
  blog,
}) {
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
          <title>
            {meta.title !== defaultTitle
              ? meta.title + " - " + defaultTitle
              : meta.title}
          </title>

          <meta name="title" content={meta.title} />
          <meta name="description" content={meta.desc} />
          <meta name="keywords" content={meta.tags} />

          <meta name="og:title" content={meta.title} />
          {/* TOOD: host image somewhere, use that URL here */}
          <meta property="og:image" content="/images/df-logo-transparent.svg" />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content="Derek Foster" />
          {blog && (
            <>
              <meta property="og:type" content="article" />
              {/* need to put published date formatted correctly here, and add in authors tag */}
              <meta property="article:published_time" content="" />
              <meta property="article:tag" content={meta.tags} />
            </>
          )}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@website-username" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer theme={footerTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

PageLayout.defaultProps = {
  meta: {
    title: defaultTitle,
    desc: "Derek Foster's Portfolio & Blog",
    url: "https://derek-foster.com",
  },
  blog: false,
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.string,
  footerTheme: PropTypes.string,
  meta: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }),
  blog: PropTypes.bool,
};
