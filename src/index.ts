import express,{Request,Response} from "express";
import cors from "cors";

import userRoute from "./Routes/User.route"



const app =express();
const PORT = 4200;



//middleware
app.use(express.json())
app.use(cors())

//middleware for endpoints
app.use('/api/v1/users',userRoute)



app.get('/', (req:Request,res:Response) => {
    res.send('Welcome to Buganda Yiyo, Buganda Yange server!');
  });


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})