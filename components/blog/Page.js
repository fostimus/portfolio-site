import { PageLayout, SectionLayout } from "@layout";
import BlogPost from "./BlogPost";
import PropTypes from "prop-types";

export default function Page({ custom, children, meta }) {
  return (
    <PageLayout theme="light" footerTheme="light" meta={meta} blog>
      <SectionLayout>
        {custom ? children : <BlogPost meta={meta}>{children}</BlogPost>}
      </SectionLayout>
    </PageLayout>
  );
}

Page.defaultProps = {
  custom: false,
};

Page.propTypes = {
  custom: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  meta: PropTypes.object,
};
