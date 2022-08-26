import React from 'react'

function Page3(props) {
    return (
        <>
            <div className='container page step_content'>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="firstRadio" />
                        <label className="form-check-label" htmlFor="firstRadio">Employed</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="secondRadio" />
                        <label className="form-check-label" htmlFor="secondRadio">Self Employed</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="thirdRadio" />
                        <label className="form-check-label" htmlFor="thirdRadio">Retired</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="fourthRadio" />
                        <label className="form-check-label" htmlFor="fourthRadio">Unemployed</label>
                    </li>
                </ul>
                
                <div  className='text-center'>
                    <p className=" btn-dark  mt-5 text-light " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Why is this important? +
                    </p>
                
                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                        <div className="card card-body bg text-light" >
                            All debt solutions are based on what you can afford to pay each month, based on your debt level. This helps us identify which solution is best for you.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3