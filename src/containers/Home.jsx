import React from 'react';
import { Helmet } from 'react-helmet';

import Products from '../components/Products';

const Home = () => (
  <>
    <Helmet>
      <title>Conf Merch - Products</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@grmmoreno" />
      <meta name="twitter:creator" content="@grmmoreno" />
      <meta name="twitter:title" content="Conf Store" />
      <meta name="twitter:description" content="Conf Store" />
      <meta
        name="twitter:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
    </Helmet>
    <Products />
  </>
);

export default Home;
