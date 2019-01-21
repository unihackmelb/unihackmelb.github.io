import Head from 'next/head';
import './index.scss';

import Page from '../layouts/page/page';
import Hero from '../components/hero/hero';
import EventDescription from '../components/event-description/event-description';
import CityBanner from '../components/city-banner/city-banner';
import Sponsor from '../components/sponsor/sponsor';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Page withHeader={false}>
      <Hero/>
      <EventDescription/>
      <section className="cities">
        <CityBanner city="Melbourne" year="2018" href="/melbourne" left={false}/>
        <CityBanner city="Sydney" year="2018" href="/sydney" left/>
      </section>
      <Sponsor/>
    </Page>
  </div>
);
