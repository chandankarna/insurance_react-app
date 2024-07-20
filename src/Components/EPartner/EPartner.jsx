import React, { Component } from 'react'
import './Style.scss'
import { Helmet } from 'react-helmet'
import Header from './Header/Header'
import WhatIs from './WhatIs/WhatIs'
import Eligibility from './EligibilityCriteria/EligibilityCriteria'
import Benefits from './Benifits/Benifits'
import Products from './Products/Products'
import FrequentlyAsked from './PIFAQs/FrequentlyAsked'

export class EPartner extends Component {
  render() {
    return (
      <>
      <Helmet>
        <title>
          Become Sales Partner ~ Policy India
        </title>
      </Helmet>
        <div className="wrapper ePartnerPage">
          <Header />
          <WhatIs />
          <Eligibility />
          <Benefits />
          <Products />
          <FrequentlyAsked />
        </div>
      </>
    )
  }
}

export default EPartner