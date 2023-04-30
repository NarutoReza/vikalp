import React, { useEffect, useState } from "react";
import axios from "axios";


const List = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/display")
      .then(({ data }) => {
        setDetails(data)
      })
  }, [])
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>School</th>
                    <th>Class</th>
                    <th>Roll</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                  {details && details.map((item) => {
                    return(
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.school}</td>
                        <td>{item.class}</td>
                        <td>{item.roll}</td>
                        <td>{item.address}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default List;