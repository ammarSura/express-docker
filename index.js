const express=require('express');

const port=5000
const app=express();

app.get('/',(req,res)=>{
    console.log('Hello!! this is running')
    return res.send('Hello!! this is running')
})

app.listen(port,()=>{
    console.log(`App listening at port:${port}`)
})