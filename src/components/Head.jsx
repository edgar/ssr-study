import NextHead from 'next/head';
import PropTypes from 'prop-types';

const BASE_URL = 'https://ssr-study.ficarious.com';
const Head = ({ title, description, url }) => {
  const finalTitle = `FIcarious | ${title}`;
  return (
    <NextHead key={title}>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Finances, Financial Independence, FIRE" />
      <meta name="author" content="Evan Williams" />
      <meta name="og:title" content={finalTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={`${BASE_URL}/${url}`} />
      <meta name="og:image" content="/favicon-32x32.png" />
      <link rel="icon" href="/favicon-32x32.png" />
    </NextHead>
  );
};
Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Head;
