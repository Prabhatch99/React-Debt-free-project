import React, { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function Planfinder() {
    const [Page, setPage] = useState(1)

    const nextPage1 = () => {
        if (Page === 2) {
            setPage(Page - 1);
        }
        else if (Page===4){
            setPage(Page-3)
        }
        else if (Page===3){
            setPage(Page-2)
        }
        
    };
    const nextPage2 = () => {
        if (Page === 1) {
            setPage(Page + 1);
        }
        else if(Page=== 3) {
            setPage(Page - 1);
        }
        else if(Page=== 4) {
            setPage(Page - 2);
        }
    };
    const nextPage3 = () => {
        if (Page === 2) {
            setPage(Page + 1);
        }
        else if (Page === 1) {
            setPage(Page + 2);
        }
        else if(Page===4){
            setPage(Page - 1);
        }
    };
    const nextPage4 = () => {
        if (Page === 3) {
            setPage(Page + 1);
        }
        else if (Page === 1) {
            setPage(Page + 3);
        }
        else if (Page === 2) {
            setPage(Page + 2);
        }
    };
    let toggle1  = Page === 1 ? 'active': null;
    let toggle2 = Page === 2 ? 'active': null;
    let toggle3  = Page === 3 ? 'active': null;
    let toggle4  = Page === 4 ? 'active': null;
    return (
        <>
            <div className='container-fluid  bg'>
                <center>
                    <div className="step_smallinfo">
                        <p>To find out what options are available to you, simply complete the online form below. Our advice is confidential, free, with no obligation and no setup fees.</p>
                        <div className="btn-toolbar mb-3 justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" onClick={nextPage1} className={`btn btn-outline-secondary ${toggle1}`} >1</button>
                                <button type="button" onClick={nextPage2} className={`btn btn-outline-secondary ${toggle2}`}>2</button>
                                <button type="button" onClick={nextPage3} className={`btn btn-outline-secondary ${toggle3}`}>3</button>
                                <button type="button" onClick={nextPage4} className={`btn btn-outline-secondary ${toggle4}`}>4</button>
    
                            </div>
                        </div>
                    </div>
                </center>
                <div>
                    {
                        Page === 1 ? <Page1 next = {nextPage2}/> : Page === 2 ? <Page2 next = {nextPage3}/> : Page === 3 ? <Page3 next = {nextPage4}/> : <Page4 />
                    }
                </div>
            </div>
        </>
    )
}

export default Planfinder