import React from 'react'
import { Link } from 'react-router-dom'
import b1 from '../assets/images/bellow1.jpg'
import b2 from '../assets/images/bellow2.jpg'
import icon1 from '../assets/images/example-home-icon1.png'
import icon2 from '../assets/images/example-home-icon2.png'
import icon3 from '../assets/images/example-home-icon3.png'
import icon4 from '../assets/images/example-home-icon4.png'
import hero from '../assets/images/hero-image.svg'

function Bellowbanner() {
    return (
        <>
            <div className="bellow_banner">
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-4 col-12'>
                            <h5>More than 83% of people we help will freeze & write off debt thanks to Government legislation. Check if you could too!</h5>
                        </div>
                        <div className='col-sm-4 col-12'>
                            <li>
                                <img src={b1} alt='...' />
                                <h5><span>IVA Plan</span><Link to="/Planfinder">from &pound;16.15/week <i className="fa fa-arrow-right"></i></Link></h5>
                            </li>
                        </div>
                        <div className='col-sm-4 col-12'>
                            <li>
                                <img src={b2} alt='...' />
                                <h5><span>DMP Plan</span><Link to="/Planfinder">from &pound;16.50/week <i className="fa fa-arrow-right"></i></Link></h5>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="bellow_tag">*People entering a IVA Plan can expect to write off up to 85% of debt.</div>
            </div>
            <section className="promo_section">
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-6 col-12'>
                            <div className="promo_left">
                                <h5>IVA Example</h5>
                                <div className="loan_box">
                                    <ul>
                                        <li><img src={icon1} alt='...'/><span>Personal Loan</span><abbr>&pound;9,250</abbr></li>
                                        <li><img src={icon2} alt='...'/><span>Credit Cards</span><abbr>&pound;8,800</abbr></li>
                                        <li><img src={icon3} alt='...'/><span>Store Cards</span><abbr>&pound;3,780</abbr></li>
                                        <li><img src={icon4} alt='...'/><span>Old Council Tax</span><abbr>&pound;1,800</abbr></li>
                                    </ul>
                                    <div className="total_debt">Total Debt &pound;23,630</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-12'>
                            <div className="promo_right ps-5">
                                <h5>Your monthly repayments*</h5>
                                <img src={hero} alt='...'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bellowbanner