const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://batcave11111:qdhzfaZ4bShPRLuW@cluster0.dedtjxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("error connecting to mongodb",err);
});

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    isActive:{
        type:Boolean,
        default:true,
    },
    tags:[String],
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

//create a model
const User=mongoose.model('User',userSchema);

//create a new document
async function runSample(){
    try{
        const newUser=await User.create({
            name:"robin tim",
            email:"batcave12222@gmail.com",
            age:30,
            tags:["hero","vigilante"],
        });
        const updateUser=await User.findByIdAndUpdate(newUser._id,{
            name:"tim drake",
            email:"robin@gmail.com",
        },{
            new:true,
        });
    }catch(err){
        console.log("error creating user",err);
    }
}
runSample();
const allUsers=async()=>{
    const users=await User.find({});
    console.log("all users",users);
}
allUsers();
