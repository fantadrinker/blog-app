import React, {useEffect, useState} from "react"
import base64 from "base-64"
import NavBar from "../../components/NavBar";

const Blog = (props) => {
    const fileName = props.FileName


}

const username = 'admin'
const password = 'Asdfg123'

const Blogs = (props) => {
    // test calling api
    const [users, setUsers] = useState([])
    useEffect( () => {
        console.log(111, "Basic " + base64.encode(username + ":" + password))
        fetch('http://127.0.0.1:8000/users/', {
            headers: {
                "Accept": "application/json; indent=4",
                "Authorization": "Basic " + base64.encode(username + ":" + password),
            }
        }).then(response => {
            if(!response.ok){
                console.log('failed request')
            } else {
                return response.json()
            }
        }).then(jsonResponse => {
            console.log(222, jsonResponse)
            setUsers(jsonResponse.results)
        })
    })
    return (
        <div>
            <NavBar />
            <span>These are blogs</span>
            <div>{users.map(user => user.username).join(",")}</div>
        </div>
    )
}

export default Blogs;