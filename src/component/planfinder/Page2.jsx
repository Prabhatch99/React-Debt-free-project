import React from 'react'

function Page2(props) {
    return (
        <>
            <div className='container step_content page'>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="firstRadio" />
                        <label className="form-check-label" htmlFor="firstRadio">Less than 2 debts</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="secondRadio" />
                        <label className="form-check-label" htmlFor="secondRadio">Between 2 and 5 debts</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="thirdRadio" />
                        <label className="form-check-label" htmlFor="thirdRadio">Between 5 and 10 debts</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.next} value="" id="fourthRadio" />
                        <label className="form-check-label" htmlFor="fourthRadio">More than 10 debts</label>
                    </li>
                </ul>
                
                <div className='text-center'>
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

export default Page2