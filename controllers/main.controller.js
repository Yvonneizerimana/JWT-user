
import jwt from "jsonwebtoken"

const user={

login:async (req, res) => {
const {username,password} =req.body
if(!username||!password){
   res.status(400).json({message:"please provide username and password"})
}

const id=new Date().getDate()
const token=jwt.sign({id,username},process.env.JWT_SECRETE,{expiresIn:"2m"});
res.status(201).json({
    message:"user created successful",
    token
})

},

 dashboard:async (req, res) => {
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({
        message:"Hello yvonne IZERE",
        secrete:`here is your authorized data , your lucky number is ${luckyNumber}`
    })
}

}


export default user 