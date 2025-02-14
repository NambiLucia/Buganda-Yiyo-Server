import express,{Request,Response} from "express";
const app =express();
const PORT = 4200;

app.get('/', (req:Request,res:Response) => {
    res.send('Welcome to Buganda Yiyo, Buganda Yange server!');
  });





app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})