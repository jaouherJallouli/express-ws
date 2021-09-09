const express=require("express")  

const app = express()



var d = new Date();

const jours = d.getDay()
const hours = d.getHours()

if(jours < 6 && jours > 0 && hours> 9 && hours < 17){
    app.use(express.static("Public"))
}else{
    app.use(express.static("Not"))
}








const port=5000
app.listen(port,()=>{
    console.log(`server runinig on port ${port}`)
})