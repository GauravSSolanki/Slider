import React from "react";

function DataTable({
  setnum,
  setmode,
  Array,
  setArray,
  setData,
  Data,
  setindex,
}) {
  const dlt = (index) => {
    let newArray = [...Array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const Edit = (item,i) => {
    setData({
      Name:item.Name,
      mail:item.mail,
      Age:item.Age,
      gender:item.gender,
      city:item.city
    });
    setindex(i);
    setmode("update");
    setnum(1);
  };

  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">City</th>
            <th scope="col">Age</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <th scope="row">{Array[0].name}</th>
            <td>{Array[0].mail}</td>
            <td>{Array[0].gender}</td>
            <td>{Array[0].city}</td>
            <td>{Array[0].Age}</td>
          </tr>
        </tbody> */}

        <tbody>
          {Array.map((item, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <th scope="row">{item.Name}</th>
                <td>{item.mail}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>{item.Age}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>dlt(i)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>Edit(item,i)}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;
