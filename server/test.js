const employee = {
    name:"Nikhil",
    dept:"Engg.",
    id:101
};


// put request
const putData = {
    name:"Nikhil Sharma",
    dept:"Tech",
    id:101
}

// patch Data
const pathData = {name:"Nikhil Sharma",id:100}

// const name = employee.name;
const {name} = employee;
console.log(name);
console.log("running js in desktop environment")
// uppercase && lowercase && digit && special && length>=8;
// employee.name
// firstName
// employee.dept;
// employee.id


const req = {
    path:{
        id:1
    }
};


const {path:{id}} = req;

console.log(id);


