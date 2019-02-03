import Head from 'next/head';
import './index.scss';

import Page from '../layouts/page/page';
import Hero from '../sections/hero/hero';
import EventDescription from '../sections/event-description/event-description';
import CityBanner from '../components/city-banner/city-banner';
import Sponsor from '../components/sponsor/sponsor';

export default () => (
  <div>
    <Head>
      <title>UNIHACK — Australia's premier student hackathon</title>
    </Head>
    <Page featureBackground>
      <Hero/>
      <EventDescription/>
      <section className="cities">
        <CityBanner city="Melbourne" year="2018" href="https://unihack2018mel.devpost.com/" left={false}/>
        <CityBanner city="Sydney" year="2018" href="https://unihack2018syd.devpost.com/" left/>
      </section>
      <Sponsor/>
    </Page>
  </div>
);