import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [name, setName] = useState("Nikhil");
    const [id, setid] = useState(1);

    const updateName = (e) => {
        // console.dir(e); // e.target-> input element
        const { value } = e.target // input.value;
        console.log(value);
        setName(value);
    }

    
    // dependency array
    
    useEffect(() => {
        // run only once
        // componentDidMount
        console.log("componentDidMount");
        document.title = "Users"
        const URL = "https://jsonplaceholder.typicode.com/users";
        // const usersPromise = axios(URL+'123');

        // console.log(usersPromise);
        // usersPromise.then(userData=>{
        //     // get the data when promise is resolved
        //     console.log("Promise resolved",userData.data);
        // }).catch(err=>{
        //     // catch err if promise is rejected
        //     console.log("Catch block");
        //     console.log(err)
        // });
        const someFunction = null;
        const getData = async()=>{
            try {
                // someFunction();
                // console.log(abc);
                // const userData = await axios.get(URL);
                console.log("Begin network request");
                const userData = await axios.get(URL);
                console.log(userData.data);    
            } catch (error) {
                console.log("catch block",error.message);
            }
            
        }

        getData();
    }, [])
    
    useEffect(() => {
    // works like component did update
    console.log("useEffect updated name",name);
    
      return () => {
        console.log("componentWillUnmount useEffect return fn");
      }
    }, [name]);

    useEffect(() => {
        console.log(id);
        // IIFE
        (async()=>{
            console.log("useEffect execute callback for id",id);
            const URL = "https://dummyapi.io/data/v1/user?limit=10";
            const data = (await axios.get(URL+id)).data;
            console.log("userData",data);
        })()

    }, [id])


    return (
        <>
            <input type="text" placeholder='Enter name' onChange={updateName} />
            <input type="number" min="1" max="10" placeholder='enter id' onChange={e=>setid(e.target.value)} />
            {/* <input type="text" placeholder='Enter name'  onChange={e=>setName(e.target.value)}/> */}
            <div>Hello {name}</div>
            <button onClick={e=>setid(999)}>Show greeting</button>
        </>
    )
}

export default Users