// import React, { useState } from "react";

// import FormOne from "./FormOne";
// import FormTwo from "./FormTwo";
// import DataTable from "./DataTable";

// function MultiPageForm() {
//   const [num, setnum] = useState(1);

//   const [name, setname] = useState("");
//   const [mail, setmail] = useState("");

//   const [gender, setgender] = useState("");
//   const [Age, setAge] = useState();
//   const [city, setcity] = useState("");

//   const [error, seterror] = useState({});
//   const [Array, setArray] = useState([]);

//   const emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//   const handleClick = (tabno) => {
//     setnum(tabno);

//     let data = {
//       name: name,
//       mail: mail,
//       gender: gender,
//       city: city,
//       Age: Age,
//     };
//     let abc = [];
//     abc.concat(data);
//     setArray(abc);
//   };
//   return (
//     <>
//       <div className="bg-secondary p-2 text-center">
//         <button
//           className="btn btn-primary m-2 p-1"
//           onClick={() => handleClick(1)}
//         >
//           Tab1
//         </button>
//         <button
//           className="btn btn-primary m-2 p-1 "
//           onClick={() => handleClick(2)}
//         >
//           Tab2
//         </button>

//         <button
//           className="btn btn-primary m-2 p-1 "
//           onClick={() => handleClick(3)}
//         >
//           Tab3
//         </button>
//       </div>

//       {num === 1 && (
//         <FormOne
//           setnum={setnum}
//           seterror={seterror}
//           error={error}
//           name={name}
//           setname={setname}
//           setmail={setmail}
//           mail={mail}
//           ev={emailValidator}
//         />
//       )}
//       {num === 2 && (
//         <FormTwo
//           setnum={setnum}
//           seterror={seterror}
//           error={error}
//           gender={gender}
//           setgender={setgender}
//           setAge={setAge}
//           setcity={setcity}
//           Age={Age}
//           city={city}
//         />
//       )}

//       {num === 3 && (
//        <DataTable name={name} mail={mail} gender={gender} city={city} Age={Age} Array={Array}/>  )}

//       {/* {num === 3 && <DataTable Array={Array} />} */}
//     </>
//   );
// }

// export default MultiPageForm;

import React, { useState } from "react";

import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import DataTable from "./DataTable";

function MultiPageForm() {
  const [num, setnum] = useState(1);

  // const [name, setname] = useState("");
  // const [mail, setmail] = useState("");

  // const [gender, setgender] = useState("");
  // const [Age, setAge] = useState();
  // const [city, setcity] = useState("");
  const [Data, setData] = useState({
    Name: "",
    mail: "",
    gender: "",
    Age: 0,
    city: "",
  });

  const [error, seterror] = useState({});
  const [Array, setArray] = useState([]);
  const [mode, setmode] = useState("create");
  const [index, setindex] = useState();

  const emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleClick = (tabno) => {
    setnum(tabno);
    // if (mode === "create") {
    //   create();
    // } else if (mode === "update") {
    //   update();
    // }
  };

  const Handlevhange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  // console.log(Array);

  return (
    <>
    <h4 className="text-center">Multiple Page Form</h4>
      <div className="bg-secondary p-2 text-center">
        <button
          className="btn btn-primary m-2 p-1"
          onClick={() => handleClick(1)}
        >
          Tab1
        </button>
        <button
          className="btn btn-primary m-2 p-1 "
          onClick={() => handleClick(2)}
        >
          Tab2
        </button>

        <button
          className="btn btn-primary m-2 p-1 "
          onClick={() => handleClick(3)}
        >
          Tab3
        </button>
      </div>

      {num === 1 && (
        <FormOne
          setnum={setnum}
          seterror={seterror}
          error={error}
          Data={Data}
          Handlevhange={Handlevhange}
          mode={mode}
          setmode={setmode}
          ev={emailValidator}
        />
      )}
      {num === 2 && (
        <FormTwo
          Array={Array}
          setArray={setArray}
          setnum={setnum}
          seterror={seterror}
          error={error}
          Data={Data}
          Handlevhange={Handlevhange}
          setData={setData}
          mode={mode}
          setmode={setmode}
          index={index}
        />
      )}

      {num === 3 && (
        <DataTable
          setnum={setnum}
          setmode={setmode}
          Array={Array}
          setArray={setArray}
          Data={Data}
          setData={setData}
          setindex={setindex}
        />
      )}

      {/* {num === 3 && <DataTable Array={Array} />} */}

      {Data.Name}
      {Data.mail}
      {num}
    </>
  );
}

export default MultiPageForm;
