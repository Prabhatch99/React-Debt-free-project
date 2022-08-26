// import React, { createContext, useState } from 'react'
// const FormContext = createContext();

// export const FormProvider = ({children})=> {
//     const [pg1b1, setPg1b1] = useState('');
//     const [pg1b2, setPg1b2] = useState('');
//     const [pg1b3, setPg1b3] = useState('');
//     const [pg1b4, setPg1b4] = useState('');

//     const [pg2b1, setPg2b1] = useState('');
//     const [pg2b2, setPg2b2] = useState('');
//     const [pg2b3, setPg2b3] = useState('');
//     const [pg2b4, setPg2b4] = useState('');

//     const [pg3b1, setPg3b1] = useState('');
//     const [pg3b2, setPg3b2] = useState('');
//     const [pg3b3, setPg3b3] = useState('');
//     const [pg3b4, setPg3b4] = useState('');

//     const [pg4b1, setPg4b1] = useState('');
//     const [pg4b2, setPg4b2] = useState('');
//     const [pg4b3, setPg4b3] = useState('@gmail.com');
//     const [pg4b4, setPg4b4] = useState('');


//     return (
//         <>
//             <FormContext.Provider
//                 value={{
//                     pg1b1,
//                     pg1b2,
//                     pg1b3,
//                     pg1b4,

//                     pg2b1,
//                     pg2b2,
//                     pg2b3,
//                     pg2b4,

//                     pg3b1,
//                     pg3b2,
//                     pg3b3,
//                     pg3b4,

//                     pg4b1,
//                     pg4b2,
//                     pg4b3,
//                     pg4b4,

//                     setPg1b1,
//                     setPg1b2,
//                     setPg1b3,
//                     setPg1b4,

//                     setPg2b1,
//                     setPg2b2,
//                     setPg2b3,
//                     setPg2b4,

//                     setPg3b1,
//                     setPg3b2,
//                     setPg3b3,
//                     setPg3b4,
                    
//                     setPg4b1,
//                     setPg4b2,
//                     setPg4b3,
//                     setPg4b4,
//                 }}
//             >{children}
//             </FormContext.Provider>

//         </>
//     )
// }

// export default FormContext