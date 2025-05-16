const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/api/data', (req, res) => {
    res.json({
        "message": "Data received",
        "data": req.body
    })
})
app.get('/products',(req,res)=>{
    const products=[
        {name:"product1",price:100},
        {name:"product2",price:200},
        {name:"product3",price:300},
    ]
    res.json(products.map((product)=>{
        return {
            name:product.name,
            price:product.price,
        }
    }));
})
app.get('/products/:id',(req,res)=>{
    const products=[
        {name:"product1",price:100},
        {name:"product2",price:200},
        {name:"product3",price:300},
    ]
    const product=products[req.params.id];
    if(!product){
        return res.status(404).send('Product not found');
    }
    res.json(product);
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!')
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})