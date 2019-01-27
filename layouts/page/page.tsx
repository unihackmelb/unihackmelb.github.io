import { ReactNode } from 'react';
import Head from 'next/head';

import './page.scss';
import { COLORS } from '../../styles/styles';

type Props = {
  featureBackground?: boolean,
  children: ReactNode
};

const Page = (props: Props) => {
  return (
    <div className="main">

      <style jsx global>
        {`body { background-color: ${props.featureBackground ? COLORS.YELLOW : COLORS.LIGHT_GREY}; }`}
      </style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="/static/favicons/favicon.ico"/>
        <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/static/favicons/favicon-96x96.png" sizes="96x96"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon-180x180.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="/static/favicons/apple-touch-icon-167x167.png"/>
        <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet"/>
      </Head>
      { props.children }
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
