import axios from 'axios';
import React, { Component } from 'react'

export default class Users extends Component {

    constructor(){
        super();
        this.state = {
            name:"Nikhil"
        };
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
                debugger;
                console.log(userData.data);    
            } catch (error) {
                console.log("catch block",error.message);
            }
            
        }

        getData();
        console.log("here");
    }

    updateName(e){
        console.dir(e); // e.target-> input element
        const {value} = e.target // input.value;
        console.log(value);
        this.setState({name:value})
    }

    render() {
        console.log(this.state);
        const {name} = this.state;
        return (
            <>
                <input type="text" placeholder='Enter name'  onChange={event=>this.updateName(event)}/>
                <div>Hello {name}</div>
                <button onClick={()=>alert(`Hello ${name}`)}>Show greeting</button>
            </>
        )
    }
}
