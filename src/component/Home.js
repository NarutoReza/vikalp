import React, { useState } from "react";
import './Home.css'

const Home = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        school: "",
        class: "",
        roll: "",
        address: ""
    })

    const emp = (demo) => {
        return fetch("http://localhost:8080/admit/enter-details",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(demo)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    }

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        emp(data)
        console.log(data)
        window.location.href = 'http://localhost:3000/download-admit'
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={submit} align="center">
                            <h4><u>Enter Your Details</u></h4>

                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control my-3" autoFocus required name="name" onChange={updateData} />
                            </div>

                            <div className="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="number" className="form-control my-3" autoFocus required name="phone" onChange={updateData} />
                            </div>

                            <div className="form-group">
                                <label for="school">School</label>
                                <input type="text" className="form-control my-3" autoFocus required name="school" onChange={updateData} />
                            </div>

                            <div className="form-group">
                                <label for="class">Class</label>
                                <input type="text" className="form-control my-3" autoFocus required name="class" onChange={updateData} />
                            </div>

                            <div className="form-group">
                                <label for="roll">Roll</label>
                                <input type="number" className="form-control my-3" autoFocus required name="roll" onChange={updateData} />
                            </div>

                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" className="form-control my-3" autoFocus required name="address" onChange={updateData} />
                            </div>
                            <button  className="btn btn-outline-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
