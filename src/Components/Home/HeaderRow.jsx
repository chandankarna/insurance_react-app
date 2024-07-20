import React from 'react'
import { Container } from 'react-bootstrap'
import umbrella from '../../Assets/Images/InsuranceImgs/umbrella.gif'
import car from '../../Assets/Images/InsuranceImgs/car.gif'
import family from '../../Assets/Images/InsuranceImgs/family.gif'
import heartbeat from '../../Assets/Images/InsuranceImgs/heartbeat.gif'
import childSaving from '../../Assets/Images/InsuranceImgs/child-saving.gif'
import investment from '../../Assets/Images/InsuranceImgs/investment.gif'
import motor from '../../Assets/Images/InsuranceImgs/motor.gif'
import motorcycle from '../../Assets/Images/InsuranceImgs/motorcycle.gif'
import term from '../../Assets/Images/InsuranceImgs/term.gif'
import travel from '../../Assets/Images/InsuranceImgs/travel.gif'
import home from '../../Assets/Images/InsuranceImgs/property.gif'
import fire from '../../Assets/Images/InsuranceImgs/fire.gif'
import group from '../../Assets/Images/InsuranceImgs/group.gif'
import retirement from '../../Assets/Images/InsuranceImgs/retirement.gif'


function HeaderRow() {
    return (
        <>
            <Container className='headerRowContainer'>
                <div className="insuCard">
                    <a href="life-insurance">
                        <div className="imgContainer">
                            <img src={umbrella} alt="Life Insurance" className="img" width="100%" />
                            <p>
                                Life Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="car-insurance">
                        <div className="imgContainer">
                            <img src={car} alt="Car Insurance" className="img" width="100%" />
                            <p>
                                Car Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="family-insurance">
                        <div className="imgContainer">
                            <img src={family} alt="Family Insurance" className="img" width="100%" />
                            <p>
                                Family Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="health-insurance">
                        <div className="imgContainer">
                            <img src={heartbeat} alt="Health Insurance" className="img" width="100%" />
                            <p>
                                Health Insurance
                            </p>
                        </div>
                    </a>
                </div>
                {/* <div className="insuCard">
                    <a href="child-saving-plans">
                        <div className="imgContainer">
                            <img src={childSaving} alt="Child_Saving Insurance" className="img" width="100%" />
                            <p>
                                Child Saving Plans
                            </p>
                        </div>
                    </a>
                </div> */}
                <div className="insuCard">
                    <a href="investment-plans">
                        <div className="imgContainer">
                            <img src={investment} alt="Investment Insurance" className="img" width="100%" />
                            <p>
                                Investment Plans
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="motor-insurance">
                        <div className="imgContainer">
                            <img src={motor} alt="Motor Insurance" className="img" width="100%" />
                            <p>
                                Motor Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="motorcycle-insurance">
                        <div className="imgContainer">
                            <img src={motorcycle} alt="Motorbike Insurance" className="img" width="100%" />
                            <p>
                                Motorbike Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="term-insurance">
                        <div className="imgContainer">
                            <img src={term} alt="Term Insurance" className="img" width="100%" />
                            <p>
                                Term Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="travel-insurance">
                        <div className="imgContainer">
                            <img src={travel} alt="Travel Insurance" className="img" width="100%" />
                            <p>
                                Travel Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="home-insurance">
                        <div className="imgContainer">
                            <img src={home} alt="Home Insurance" className="img" width="100%" />
                            <p>
                                Home Insurance
                            </p>
                        </div>
                    </a>
                </div>
                <div className="insuCard">
                    <a href="fire-insurance">
                        <div className="imgContainer">
                            <img src={fire} alt="Fire Insurance" className="img" width="100%" />
                            <p>
                                Fire Insurance
                            </p>
                        </div>
                    </a>
                </div>
                {/* <div className="insuCard">
                    <a href="group-health-insurance">
                        <div className="imgContainer">
                            <img src={group} alt="Fire Insurance" className="img" width="100%" />
                            <p>
                                Group Health Insurance
                            </p>
                        </div>
                    </a>
                </div> */}
                <div className="insuCard">
                    <a href="retirement-plans">
                        <div className="imgContainer">
                            <img src={retirement} alt="Fire Insurance" className="img" width="100%" />
                            <p>
                                Retirement Plans
                            </p>
                        </div>
                    </a>
                </div>
            </Container>
        </>
    )
}

export default HeaderRow