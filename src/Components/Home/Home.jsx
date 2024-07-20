import React from 'react';
import Header from './Header';
import CustomCardCarousel from '../Carousels/CutsomCardCarousel';
import { Helmet } from 'react-helmet';
import WhySection from './WhySection/WhySection';
import Advantage from './Advantage/Advantage';
import FaqSection from './FAQSection/FaqSection';
import Call from './Call/Call';
import ArticleSection from './Articles/ArticleSection';
import AnimatedSection from '../Carousels/AnimatedSection'; // Import the AnimatedSection component

function Home() {
  return (
    <>
      <Helmet>
        <title>Home ~ Policy India</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <AnimatedSection>
          <CustomCardCarousel />
        </AnimatedSection>
        <AnimatedSection>
          <WhySection />
        </AnimatedSection>
        <AnimatedSection>
          <Advantage />
        </AnimatedSection>
        <AnimatedSection>
          <Call />
        </AnimatedSection>
        <AnimatedSection>
          <ArticleSection />
        </AnimatedSection>
        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>
      </div>
    </>
  );
}

export default Home;
