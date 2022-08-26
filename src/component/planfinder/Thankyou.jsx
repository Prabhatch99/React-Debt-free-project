import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {
    return (
        <>
            <div className='container'>
                <div className='row main-content'>
                        <i class="fa-5x fa-solid fa-circle-check" id="checkmark"></i>
                        <h1>Thankyou!</h1>
                        <h3>Your Submisssion is recived and we will contact you soon</h3>
                        <p><i class="fa-solid fa-arrow-left-long"></i><Link to='/'> back to Home</Link></p>
                        
                    </div>
                </div>
            </>

            )
}

            export default Thankyou