import React from 'react'
import { Link } from 'react-router-dom'
import ic1 from '../assets/images/icon1.svg'
import ic2 from '../assets/images/icon2.svg'
import ic3 from '../assets/images/icon3.svg'

function Bestsolution() {
	return (
		<>
			<div className="best_solution">
				<div className="container">
					<h3>Which plan fits your life? </h3>
					<div className='row'>
						<div className='col-sm-4 col-12'>
						<li>
							<img src={ic1} alt='...' />
							<h5>Individual Voluntary Arrangement</h5>
							<p>Make payments over 5 years and have up to 85% of your debt written off.</p>
							<Link className="button button_white" to="/Planfinder">Learn more..</Link>
						</li>
						</div>
						<div className='col-sm-4 col-12'>
						<li>
							<img src={ic3} alt='...' />
							<h5>Debt Management Plan</h5>
							<p>A debt management plan allows you to pay back your creditors. </p>
							<Link className="button button_white" to="/Planfinder">Learn more..</Link>
						</li>
						</div>
						<div className='col-sm-4 col-12'><li>
							<img src={ic2} alt='...' />
							<h5>Scottish Trust Deed</h5>
							<p>Make payments over 4 years and have up to 85% of your debt written off.</p>
							<Link className="button button_white" to="/Planfinder">Learn more..</Link>
						</li></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Bestsolution