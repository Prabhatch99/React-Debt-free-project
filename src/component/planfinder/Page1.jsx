import React from 'react'

function Page1(props) {

    return (
        <>
            <div className='container page step_content'>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1 "  type="radio" name="listGroupRadio" onClick={props.next} value='' id="firstRadio" />
                        <label className="form-check-label" htmlFor="firstRadio">Less than £5,000</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value='' id="secondRadio" />
                        <label className="form-check-label" htmlFor="secondRadio">£5000-£10,000</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value=''  id="thirdRadio" />
                        <label className="form-check-label" htmlFor="thirdRadio">£10,000-£20,000</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value='' id="fourthRadio" />
                        <label className="form-check-label" htmlFor="fourthRadio">More than £20,000</label>
                    </li>
                    <div className='text-center'>
                    <p className=" mt-5 text-light " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Why do we need to know this?  +
                    </p>
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <div className="card card-body bg text-light text-center" >
                            Your amount of debt can affect what solution you qualify for.
                        </div>
                    </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Page1