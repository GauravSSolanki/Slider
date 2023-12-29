// import React from "react";

// function FormOne({
//   setnum,
//   seterror,
//   error,
//   name,
//   setname,
//   setmail,
//   mail,
//   ev,
// }) {
//   const handle1 = () => {
//     if (verify()) {
//       setnum(2);
//     }
//   };

//   const verify = () => {
//     let localError = {};
//     let valid = true;

//     if (name.length === 0) {
//       localError.name = "please enter name";
//       valid = false;
//     }
//     if (name.length <= 5 && name.length > 0) {
//       localError.name = "please enter 5 character name";
//       valid = false;
//     }
//     if (mail.length <= 3) {
//       localError.mail = "Enter valid Email id";
//       valid = false;
//     }
//     seterror(localError);
//     return valid;
//   };

//   return (
//     <>
//       <div
//         className="bg-secondary p-2 text-center "
//         style={{ width: "25vw", margin: "auto" }}
//       >
//         <div className="p-3 bg-primary">
//           <label className="d-block">Name :</label>
//           <input
//             type="text"
//             className="p-1 w-75 text-center"
//             onChange={(e) => setname(e.target.value)}
//           ></input>
//           {error.name && <p>{error.name}</p>}
//         </div>
//         <div className="p-3 bg-primary">
//           <label className="d-block ">Email :</label>
//           <input
//             type="email"
//             className="p-1 w-75 text-center"
//             onChange={(e) => setmail(e.target.value)}
//           ></input>
//           {error.mail && <p>{error.mail}</p>}
//         </div>
//         <button className="btn btn-danger" onClick={handle1}>
//           Next
//         </button>
//       </div>
//     </>
//   );
// }

// export default FormOne;

import React from "react";

function FormOne({ setnum, seterror, error, Data, Handlevhange, ev }) {
  const handle1 = () => {
    if (verify()) {
      setnum(2);
    }
  };

  const verify = () => {
    let localError = {};
    let valid = true;

    if (Data.Name?.length === 0) {
      localError.name = "please enter name";
      valid = false;
    }
    else if (Data.Name?.length <= 5 && Data.Name?.length > 0) {
      localError.Name = "please enter 5 character name";
      valid = false;
    }
    if (Data.mail?.length <= 3) {
      localError.mail = "Enter valid Email id";
      valid = false;
    }
    seterror(localError);
    return valid;
  };

  return (
    <>
      <div
        className="bg-secondary p-2 text-center "
        style={{ width: "25vw", margin: "auto" }}
      >
        <div className="p-3 bg-primary">
          <label className="d-block">Name :</label>
          <input
            type="text"
            name="Name"
            className="p-1 w-75 text-center"
            onChange={Handlevhange}
          ></input>
          {error.Name && <p>{error.Name}</p>}
        </div>
        <div className="p-3 bg-primary">
          <label className="d-block ">Email :</label>
          <input
            type="email"
            name="mail"
            className="p-1 w-75 text-center"
            onChange={Handlevhange}
          ></input>
          {error.mail && <p>{error.mail}</p>}
        </div>
        <button className="btn btn-danger" onClick={handle1}>
          Next
        </button>
      </div>
    </>
  );
}

export default FormOne;
