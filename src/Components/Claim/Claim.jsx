import React from 'react'
import Header from './Header/Header'
import { Helmet } from 'react-helmet'
import HelpDesk from './HelpDesk/HelpDesk'
import ClaimRequestSteps from './Steps/Step'

function Claim() {
  return (
    <>
      <Helmet>
        <title>
          Claim ~ Policy India
        </title>
      </Helmet>
      <Header />
      <HelpDesk />
      <ClaimRequestSteps />
    </>
  )
}

export default Claim