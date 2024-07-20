import React, { Component } from 'react'
import AdvantageCards from './AdvantageCards';
import AdvantageTxt from './AdvantageTxt';
import './Style.scss'

export class Advantage extends Component {
  render() {
    return (
      <>
        <section className="advantage-section">
          <AdvantageTxt />
          {/* <AdvantageCards /> */}
        </section>
      </>
    )
  }
}

export default Advantage;