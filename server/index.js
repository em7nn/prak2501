const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")


dotenv.config()

const { Schema } = mongoose;

const userSchema = new Schema({
    imgUrl: { type: String},
    title: { type: String },
    description: { type: String },
},
    { timestamps: true }
)

const Users = mongoose.model("users", userSchema)


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send('<h1>Admin Panel</h1>')
})

app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message: err})
        }
    })
})

app.get("/users/:id",(req,res)=>{
    const { id } = req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message :"NOT FOUND"})
            }
        } else{
            res.status(500).json({message:err})
        }
    })
})

app.delete("/users/:id",(req,res)=>{
    const { id } = req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("delete data")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

app.post("/users",(req,res)=>{
    const card = new Users({
      imgUrl:req.body.imgUrl,
      title:req.body.title,
      description:req.body.description,
      
     
    })
    card.save()
    res.json({message:"Card Created"})
  })

const PORT = process.env.PORT

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.set('strictQuery', false);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB Connected");
        app.listen(PORT, () => {
            console.log("Server Start");
        })
    }
})