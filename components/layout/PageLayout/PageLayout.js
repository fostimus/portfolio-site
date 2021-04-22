import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./pageLayout.module.scss";
import { ThemeContext } from "globalState";
import { useContext } from "react";
import PropTypes from "prop-types";
import { dateFormat } from "@blog";
import dayjs from "dayjs";

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
          <link
            rel="canonical"
            href={
              blog
                ? `https://derek-foster.com${meta.link}`
                : "https://derek-foster.com"
            }
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
          <meta name="og:image" content={meta.image} />
          <meta name="og:url" content={meta.url} />
          <meta name="og:site_name" content="Derek Foster" />
          {blog && (
            <>
              <meta name="og:type" content="article" />
              <meta
                name="article:published_time"
                content={dayjs(meta.date).format(dateFormat)}
              />
              <meta name="article:tag" content={meta.tags} />
            </>
          )}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@derek-foster.com" />
          <meta name="twitter:creator" content="@fostimus" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.desc} />
          <meta name="twitter:image" content={meta.image} />
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
    image: "https://i.imgur.com/w8G3DnM.png",
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
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
  }),
  blog: PropTypes.bool,
};
