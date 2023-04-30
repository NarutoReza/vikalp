import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


const Formm = () => {

  const [clas, setClas] = useState('')
  const [roll, setRoll] = useState('')

  const [cookies, setCookies] = useCookies(['clas', 'roll'])

  function handleCookie1(){
    setCookies('clas', clas, {path: '/', maxAge: 1})
  }

  function handleCookie2(){
    setCookies('roll', roll, {path: '/', maxAge: 1})
  }

  const emp = (demo) => {
    return fetch()
  }

  const submit = e => {
    e.preventDefault()
    emp()
    console.log(clas, roll)

    axios
      .post(`http://localhost:8080/login/${clas}/${roll}`)
      .then(res => {
        const data = res.data;
        if(data.length == 0){
          console.log('Try again')
        }
        else{
          window.location.href = 'http://localhost:3000/admit'
          console.log('Done')
        }
        console.log(data)
      })
      .catch(err => console.log(err))

    // window.location.href = (`admit`)
  }
  
  return(
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={submit} align="center">
                        <div className="form-group">
                            <label for="clas">Class</label>
                            <input type="text" className="form-control my-3" autoFocus required name="clas" onChange={e => setClas(e.target.value)} onClick={handleCookie1()} />
                        </div>

                        <div className="form-group">
                            <label for="roll">Roll</label>
                            <input type="number" className="form-control my-3" autoFocus required name="roll" onChange={e => setRoll(e.target.value)} onClick={handleCookie2()} />
                        </div>
                        <button  className="btn btn-outline-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
};

export default Formm;