class Employee{
    constructor(id,name,dept){
        this.id = id;
        this.name = name;
        this.dept = dept;
    }

    markAttendance(day){
        // have its own binding
        console.log(this);
        console.log(`Employee ${this.id} Marked present for ${day}`);
    }
    // markAttendance = (day)=>{
        // takes the context "this" obj from the parent
    //     console.log(this);
    //     console.log(`Employee ${this.id} Marked present for ${day}`);
    // }
}

const obj = {
    name:"abc",
    objMethod(){
        console.log(this);
        console.log(this.name);
    }
}

const obj2 = {
    name:"xyz",
}

obj.objMethod()  //obj

const method1 = obj.objMethod.bind(obj2); //obj2
method1();
obj.objMethod.call(obj2); //obj2



const emp1 = new Employee(101,"Nikhil","Engg");
const emp2 = new Employee(102,"Nikhil","Engg");

emp1.markAttendance.call(emp2)

// emp1.markAttendance("Monday");
// console.log(emp1);
function func(){
    console.log(this);
}


func() //global object window -browser, Node global obj