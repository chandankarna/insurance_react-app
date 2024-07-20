import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import What from "./What/What";
import Vision from "./Vision/Visio";
import How from "./How/How";
import AnimationSection from "../Carousels/AnimatedSection";

export class About extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>About ~ Policy India</title>
        </Helmet>
        <div className="wrapper">
          <AnimationSection>
            <Header />
          </AnimationSection>
          
          <AnimationSection>
            <What />
          </AnimationSection>
          
          <AnimationSection>
            <Vision />
          </AnimationSection>

          <AnimationSection>
            <How />
          </AnimationSection>
        </div>
      </>
    );
  }
}

export default About;
