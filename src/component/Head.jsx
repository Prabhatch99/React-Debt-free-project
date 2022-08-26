import React from 'react'
import p1 from '../assets/images/banner-a.png'
import { Link } from 'react-router-dom'
import "../assets/css/mystyle.css"
import Bellowbanner from './Bellowbanner'
import Step3 from './Step3'
import Bestsolution from './Bestsolution'
import Helpsection from './Helpsection'
import Footer from './Footer'
import Fixfooter from './Fixfooter'
import Planfinder from './planfinder/Planfinder'
// import { FormProvider } from './FormContexct/FormProvider'

function Head() {
    return (
        <>
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-6 col-12 p-0'>
                            <div > <img src={p1} alt='...' /> </div>
                        </div>
                        <div className='col-sm-6 col-12'>
                            <div className="container content_top mycontainer">
                                <h1>Steps To Change<br />Your Debt Future</h1>
                                <div className="banner_dis">*write off up to 81% of debt with selected plans.<br /> check if you qualify</div>
                                <div className="banner_button"><Link className="button button_white mt-4" to="/Planfinder">Get Started</Link></div>
                            </div>
                        </div>
                    {/* <FormProvider><Planfinder/></FormProvider> */}
                    <Planfinder/>
                    <Bellowbanner />
                    <Step3 />
                    <Bestsolution/>
                    <Helpsection/>
                    <Footer/>
                    <Fixfooter/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head