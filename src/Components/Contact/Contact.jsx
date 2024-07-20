import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header/Header'
import Call from '../Home/Call/Call'
import Support from './Support/Support'
import Map from './Map/Map'

export class Contact extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>
                        Contact ~ Policy India
                    </title>
                </Helmet>
                <div className="wrapper">
                    <Header />
                    <Call />
                    {/* <Support /> */}
                    <Map />
                </div>
            </>
        )
    }
}

export default Contact