import React from 'react'
import { Link } from 'react-router-dom'

function Fixfooter() {
    return (
        <>
            <div className="bottom-cta mobile_view fixed-bottom">
                <span className='text-center '>Want to know how you can clear your debt?</span>
                <Link className="button button_white" to="/Planfinder">Click here</Link>
            </div>
        </>
    )
}

export default Fixfooter