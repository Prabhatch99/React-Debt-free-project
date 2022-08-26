import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../assets/images/mobile-img.png'
import "../assets/css/mystyle.css"

function Step3() {
    return (
        <div className="step_3">
            <div className="container">
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <div className="wysiwyg">
                            <h2>Whatever your circumstances, help is available.</h2>
                            <ul>
                                <li>
                                    <strong>Help is available right now</strong>
                                    <p>We understand more than most that dealing with debt can be stressful, but we also know how easily it can be resolved. Just get in touch. Do not suffer in silence.</p>
                                </li>
                                <li>
                                    <strong>Try our PlanFinder</strong>
                                    <p>Do you want to clear your debt? We can help display your options in less than a minute. All you need to do is complete our PlanFinder, there is no obligation and it is completely confidential.</p>
                                </li>
                                <li>
                                    <strong>Free debt advice</strong>
                                    <p>All advice you will receive from us will be free. You can close an enquiry at the click of a button if you decide against something. If you are serious about change, then get in touch.</p>
                                </li>
                                <li>
                                    <strong>We'll help all the way</strong>
                                    <p>We will help with advice, contacting your lenders, with paperwork and even help in the future if you need further advice. We will teach you how to deal with bailiffs and debt collectors too.</p>
                                </li>
                                <Link className="button mt-3" to="/Planfinder">Learn more</Link>
                            </ul>
                        </div>

                    </div>
                    <div className='col-sm-6 col-12'>
                        <div className="mobile_img"><img src={phone} alt='...' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3