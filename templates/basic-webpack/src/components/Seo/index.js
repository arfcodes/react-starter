/**
 * Seo/index.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Seo = ({ description, lang, meta, title }) => {
  const defaultTitle = 'My Site';
  const defaultDescription = 'My Site';
  const author = 'My Site';
  const metaDescription = description || defaultDescription;
  return (
    <Helmet
      htmlAttributes={{
        lang: lang || process.env.LANGUAGE,
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s - ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Seo;
