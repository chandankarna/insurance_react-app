import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CareerHeader from './Header/Header'

export class Career extends Component {
  render() {
    return (
      <>
        <Helmet>
            <title>
                Career ~ Policy India
            </title>
        </Helmet>
        <CareerHeader />
      </>
    )
  }
}

export default Career