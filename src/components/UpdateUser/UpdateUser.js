import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({ name: "", email: "" });
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8080/users/${id}`)
            .then((response) => response.json())
            .then(result => {
                setUser(result)
                //   console.log(result)
            })
    }, [])
    // console.log(id)
    // console.log(user)


    // update user -----------------------



    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email }
        setUser(updatedUser)
        // console.log(updatedUser)
        // console.log(e.target.value)
    }

    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedUser = { ...user }
        updatedUser.email = updatedEmail;
        setUser(updatedUser)
        // console.log(updatedUser)
    }


    const handleUpdate = (e) => {
        const url = `https://secure-ravine-33086.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Updated')
                    setUser({})
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Update user</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleNameChange} value={user.name || ""} />
                <input type="text" onChange={handleEmailChange} value={user.email || ""} />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;