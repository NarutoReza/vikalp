import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useReactToPrint } from "react-to-print";

const cookies = new Cookies()


const Admit = () => {
  const [details, setDetails] = useState([])

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const clas = cookies.get('clas')
  const roll = cookies.get('roll')

  console.log(clas, roll)

  useEffect(() => {
    axios
      .post(`http://localhost:8080/login/${clas}/${roll}`)
      .then(({ data }) => {
        setDetails(data)
      })
  }, [])
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="table-responsive" ref={componentRef}>
                
              <h1 align="center">ADMIT CARD</h1>

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

            <div className="text-center">
                <button  className="btn btn-outline-info" onClick={handlePrint}>Download Admit Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Admit;