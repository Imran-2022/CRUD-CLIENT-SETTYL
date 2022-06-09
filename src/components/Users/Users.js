import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        const url="https://secure-ravine-33086.herokuapp.com/users"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[])
    // console.log(user)
    //delete an user - 

    const handleDelete = (id) =>{
        // const proced= window.confirm("are you sure, you want to delete ?");

        if(true){
            fetch(`https://secure-ravine-33086.herokuapp.com/users/${id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())// or res.text()) 
              .then(res => {
                  if(res.deletedCount===1)
                  {
                    //   alert(`User ${id} deleted successfully`)
                      const newUser = user.filter(ab=>ab._id !=id);
                      setUser(newUser)
                  }
              })
        }
    }

    return (
        <div>
            <h2>the number of users : {user.length}</h2>
            {
                user.map((user,i)=>{
                    return (
                        <div key={user._id}>
                            <p>{i+1}. {user.name} {user.email} <Link to={`/users/update/${user._id}`}><button>update</button></Link> <button onClick={()=>handleDelete(user._id)}>delete</button></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;