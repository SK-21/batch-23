import axios from 'axios';
import React, { Component } from 'react'

export default class Users extends Component {

    constructor(){
        super();
        console.log("Init phase constructor");
        this.state = {
            name:"Nikhil"
        };
    }

    updateName(e){
        console.dir(e); // e.target-> input element
        const {value} = e.target // input.value;
        console.log(value);
        this.setState({name:value});
        // console.log("new state",this.state);
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
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
    }
    render() {
        console.log("render",this.state);
        const {name} = this.state;
        return (
            <>
                <input type="text" placeholder='Enter name'  onChange={event=>this.updateName(event)}/>
                <div>Hello {name}</div>
                <button onClick={()=>alert(`Hello ${name}`)}>Show greeting</button>
            </>
        )
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log({nextProps});
        console.log({nextState});
        console.log("shouldComponentUpdate");
        return true;
    };

    componentWillUpdate(...args){
        console.log(args);
        console.log("componentWillUpdate");
    };

    componentDidUpdate(...args){
        console.log(args);
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}
