// import React from "react";

// import { age } from "./Age";

// function FormTwo({
//   setnum,
//   error,
//   seterror,
//   city,
//   setcity,
//   setAge,
//   setgender,
//   Age,
//   gender,
// }) {
//   const Handle3 = (e) => {
//     setcity(e.target.value);
//   };

//   const Handle4 = (e) => {
//     setAge(e.target.value);
//   };

//   const Handle5 = (e) => {
//     setgender(e.target.value);
//   };

//   const handle2 = () => {
//     if (verify()) {
//       setnum(3);
//     }
//   };

//   const verify = () => {
//     let localError = {};
//     let valid = true;

//     if (!gender) {
//       localError.gender = "Select Gender";
//       valid = false;
//     }
//      if (!Age) {
//       localError.Age = "select age";
//       valid = false;
//     }
//      if (!city) {
//       localError.city = "select city";
//       valid = false;
//     }

//     seterror(localError);
//     return valid;
//   };

//   return (
//     <>
//       <div
//         className=" p-3 text-center bg-dark"
//         style={{ width: "25vw", margin: "auto" }}
//       >
//         <div className="p-3 bg-secondary">
//           <label className="d-block">City :</label>
//           <select id="" name="City" onChange={Handle3} className="p-1">
//             <option value="">Cho..</option>
//             <option value="Kota">Kota</option>
//             <option value="Jaipur">Jaipur</option>
//             <option value="Udaipur">Udaipur</option>
//           </select>

//           {error.city && <p>{error.city}</p>}
//           <label className="d-block">Age :</label>
//           <select id="" name="age" className="pl-3 pr-3" onChange={Handle4}>
//             <option value="">age</option>
//             {age.map((e, i) => (
//               <option key={i} value={e}>
//                 {e}
//               </option>
//             ))}
//           </select>
//           {error.Age && <p>{error.Age}</p>}
//         </div>
//         <div className="p-3 bg-secondary">
//           <label className="d-block ">Gender :</label>
//           <input
//             type="radio"
//             name="gender"
//             className="p-1 m-2"
//             value="male"
//             onChange={Handle5}
//             checked={gender==="male"}
//           ></input>
//           <label className=" ">Male</label>
//           <input
//             type="radio"
//             name="gender"
//             className="p-1 m-2"
//             value="female"
//             checked={gender==="female"}
//             onChange={Handle5}
//           ></input>
//           <label className=" ">Female</label>

//           {gender && <p>{error.gender}</p>}
//         </div>
//         <button className="btn btn-success" onClick={handle2}>
//           Next
//         </button>
//       </div>
//     </>
//   );
// }

// export default FormTwo;

import React from "react";

import { age } from "./Age";

function FormTwo({
  Array,
  mode,
  setmode,
  setData,
  setnum,
  error,
  seterror,
  Data,
  Handlevhange,
  setArray,
  index
}) {
  const handle2 = () => {
    if (verify()) {
      setnum(3);
      if (mode === "create") {
        let newArray = [];
        newArray = Array.concat(Data);
        setArray(newArray);

        setData({
          Name: "",
          mail: "",
          gender: "",
          Age: 0,
          city: "",
        });
      } else if (mode === "update") {
        let abc = [...Array];
        abc[index] = Data;
        setArray(abc);
        setmode("create");
      }
      else{

      }
    }
  };

  const verify = () => {
    let localError = {};
    let valid = true;

    if (!Data.gender) {
      localError.gender = "Select Gender";
      valid = false;
    }
    // if (Data.Age===0) {
    //   localError.Age = "select age";
    //   valid = false;
    if (!Data.city) {
      localError.city = "select city";
      valid = false;
    }

    seterror(localError);
    return valid;
  };

  return (
    <>
      <div
        className=" p-3 text-center bg-dark"
        style={{ width: "25vw", margin: "auto" }}
      >
        <div className="p-3 bg-secondary">
          <label className="d-block">City :</label>
          <select
            id=""
            value={Data.city}
            name="city"
            onChange={Handlevhange}
            className="p-1"
          >
            <option value="">Cho..</option>
            <option value="Kota">Kota</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Udaipur">Udaipur</option>
          </select>

          {error.city && <p>{error.city}</p>}
          <label className="d-block">Age :</label>
          <select
            id=""
            name="Age"
            className="pl-3 pr-3"
            onChange={Handlevhange}
          >
            <option value="">age</option>
            {age.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          {error.Age && <p>{error.Age}</p>}
        </div>
        <div className="p-3 bg-secondary">
          <label className="d-block ">Gender :</label>
          <input
            type="radio"
            name="gender"
            className="p-1 m-2"
            value="male"
            onChange={Handlevhange}
            checked={Data.gender === "male"}
          ></input>
          <label className=" ">Male</label>
          <input
            type="radio"
            name="gender"
            className="p-1 m-2"
            value="female"
            checked={Data.gender === "female"}
            onChange={Handlevhange}
          ></input>
          <label className=" ">Female</label>

          {error.gender && <p>{error.gender}</p>}
        </div>
        <button className="btn btn-success" onClick={handle2}>
          {mode}
        </button>
      </div>

      {Data.gender}
      {Data.city}
      {Data.Age}
    </>
  );
}

export default FormTwo;
