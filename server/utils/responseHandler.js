const responseCreator = (message,data)=>{
    const response = {message,success:true};
    if(data){
        response.data = data;
    };
    return response;
}


const errorCreator = (message,status=500)=>{
    const err = new Error(message);
    err.status = status;
    throw(err)
};


module.exports = {responseCreator,errorCreator};