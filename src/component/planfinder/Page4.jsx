import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

function Page4() {
    var [user, setuser] = useState({
        user_firstname: "",
        user_lastname: "",
        user_email: "",
        user_phone: ""
    })
    console.log(user.user_firstname)

    function getData(e) {
        var name = e.target.name
        var value = e.target.value

        setuser(oldData => {
            return {
                ...oldData,
                [name]: value,
            }
        })
    }


    const navigate = useNavigate();

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d66a6i8', 'template_wrfy11c', form.current, 'pSiVov6AlIOyLXF1g')
            .then((result) => {
                console.log(result.text);
                navigate("/Thankyou")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='container  p-0 page4  mb-5'>
                <div className='row'>
                    <div className='col-sm-4 col-12 p-0'>
                        <div className="form-left">
                            <h3>1. Great news, it looks like we can help!</h3>
                            <p className='my-4'>Get your results now and find out how Specialist legislation can help you:</p>
                            <ul>
                                <li>Pay as little as £80 towards your debt each month</li>
                                <li>Find out what percentage of unaffordable debt you can write off</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-8 col-12 p-0'>
                        <div className="form-right">
                            <h1>2. Take the next step today</h1>
                            <h2>Almost there!<br /> Please provide your contact details so we can get your results to you.</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='row'>
                                    <div className='col-sm-6 col-12'>
                                        <div className="mb-1 p-3">
                                            <input type="text" className="form-control" name='user_firstname'  onChange={getData} placeholder='First Name*' required />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-12'>
                                        <div className="mb-1 p-3">
                                            <input type="text" className="form-control" name='user_lastname'  onChange={getData} placeholder='Last Name*' required />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 col-12'>
                                        <div className="mb-1 p-3">
                                            <input type="email" className="form-control" name='user_email'  onChange={getData} placeholder='Email*' required />
                                        </div>
                                    </div>
                                    <div className='col-sm-6 col-12'>
                                        <div className="mb-1 p-3">
                                            <input type="phone" className="form-control" name='user_phone'  onChange={getData} placeholder='Enter Your Phone Number*' required />
                                        </div>
                                    </div>
                                    <div className="agree-text text-center">I agree to be contacted by phone or email. See our Terms & Policies for more information.</div>

                                </div>

                                <p className=" btn-dark  mt-5 px-5 mx-5 text-dark text-center " type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                    What debts can I include? +
                                </p>

                                <div >
                                    <div className="collapse collapse-horizontal" id="collapseWidthExample">
                                        <div className="card card-body bg-light text-dark " >
                                            You could include - Utility arrears, Council arrears, Store debts, Loans, Credit cards, Catalogues, CCJ's, Overdrafts, HMRC Debts, Bailiff debt & Debt collector debts. Plus more!
                                        </div>
                                    </div>
                                </div>

                                <center><button type="submit " className="btn button" >Submit</button></center>
                               

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page4