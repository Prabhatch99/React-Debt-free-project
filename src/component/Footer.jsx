import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/money-helper-logo.png"

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className='row foot_links'>
                        <div className='col-sm-3 col-12'>
                            <div className="footer_logo">
                                <div className="footerfol">
                                    <img src={logo} alt='...' />
                                    <span>Further free Debt Help and Advice is available from the Money Helper.</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 col-12'>
                            <ul>
                                <li><h5>Debt Solutions</h5></li>
                                <li><Link className='active' to="/Planfinder">DMP (Debt Management Plans)</Link></li>
                                <li><Link className='active' to="/Planfinder">IVA (Individual Voluntary Arrangement)</Link></li>
                                <li><Link className='active' to="/Planfinder">Self-Employed IVA</Link></li>
                                <li><Link className='active' to="/Planfinder">Bankruptcy</Link></li>
                                <li><Link className='active' to="/Planfinder">Debt Settlements</Link></li>
                                <li><Link className='active' to="/Planfinder">Debt Consolidation Loans</Link></li>
                                <li><Link className='active' to="/Planfinder">Administration Orders</Link></li>
                                <li><Link className='active' to="/Planfinder">DIY Debt Plan</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-3 col-12'>
                            <ul>
                                <li><h5>Scottish Debt Solutions</h5></li>
                                <li><Link className='active' to="/Planfinder">Trust Deeds</Link></li>
                                <li><Link className='active' to="/Planfinder">DAS (Debt Arrangement Scheme)</Link></li>
                                <li><Link className='active' to="/Planfinder">Sequestration</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-3 col-12'>
                            <ul>
                                <li><h5>Debt Information</h5></li>
                                <li><Link className='active' to="/Planfinder">Credit score and debts</Link></li>
                                <li><Link className='active' to="/Planfinder">Dealing with Bailiffs - How to</Link></li>
                                <li><Link className='active' to="/Planfinder">Debt glossary</Link></li>
                                <li><Link className='active' to="/Planfinder">House Repossession Advice</Link></li>
                                <li><Link className='active' to="/Planfinder">Payday loan debt help</Link></li>
                                <li><Link className='active' to="/Planfinder">Default notices</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div style={{ clear: "both" }}></div> */}
                    <div className="foot_info">

                        Disclaimer: www.steadydebtchange.co.uk is an independent website created to help users find debt help and advice. Our service is free to use and you are under no obligation to accept any of the quotes or recommendations you receive. Calls may be recorded/monitored to help improve customer service. *In some cases debt solutions up to 85% can be written off. The amount written off will depend on your circumstances, income, assets and the current write-off policy of your creditors.<br />
                        For example: With an IVA solution you complete Link questionnaire detailing all your income, assets and essential expenditure including mortgage repayments, if you have one. After you've paid for all of your essential living costs in the month plus Link modest amount for personal spending, the remainder is paid into your IVA. If, at the end of the five year IVA period you still have outstanding debts, your creditors may agree to write off the remainder. Other solutions apart from an IVA are available, and may be more suitable. The debt advisor will offer advice based on your circumstances.<br /><br />
                        Steady Debt Change Limited<br />
                        Unit 16, Campus Road<br />
                        Bradford<br />
                        West Yorkshire<br />
                        BD7 1HR

                        <br /><br />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer