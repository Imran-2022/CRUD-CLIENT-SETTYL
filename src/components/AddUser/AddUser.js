import React, { useRef} from 'react';

const AddUser = () => {

    const nameRaf = useRef();
    const emailRaf = useRef();
    const handleSubmit = (e) => {
        const name = nameRaf.current.value;
        const email = emailRaf.current.value;
        console.log(name, email)
        const newData = { name, email };
        
        fetch("http://localhost:8080/users",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newData),
        })
        .then(res=>res.json())
        .then(data =>{
            if (data.insertedId) {
                // alert("user added successfully !!")
                e.target.reset();
            }
        })
 
        // alert("data added !!")
        // nameRaf.current.value="";
        // emailRaf.current.value="";
        e.preventDefault();

    }


    // ----------------------------------------------------------------

    return (
        <div>
            <h2>please add an user !!</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRaf} placeholder="name" />
                <input type="text" ref={emailRaf} placeholder="email" />
                <input type="submit" value="submit btn" />
            </form>
        </div>
    );
};

export default AddUser;