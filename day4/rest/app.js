const express=require('express');
const app=express();
app.use(express.json());
let books=[{
    id:1,
    title:"book1",
    author:"author1",
    price:100,
},
{
    id:2,
    title:"book2",
    author:"author2",
    price:200,
},
]

//get all books
app.get('/books',(req,res)=>{
    res.json({
        message:"all books",
        data:books,
    });
})
//get book by id
app.get('/books/:id',(req,res)=>{
    const book=books.find((book)=>book.id===parseInt(req.params.id));
    if(!book){
        return res.status(404).json({
            message:"book not found",
        });
    }
    res.json({
        message:"book found",
        data:book,
    });
});
app.listen(4000,()=>{
    console.log("server is running on port 4000");
})