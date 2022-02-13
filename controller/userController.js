const User = require("../model/user")


const showUser = async (req, res) => {
    const showUser = await User.find({});
    res.send(showUser)
}

const storeUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const saveUser = await newUser.save();
        res.json({
            message: "User added successfull"
        })
    }
        catch(error){
            console.log(error)

        }
    
}

const userById = async (req,res)=>{
    const id = req.params.id;
    const showById = await User.findById({_id:id})
    res.send(showById)
}

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const updateUser = await User.updateOne({_id:id},req.body)
    res.json({
        message:"update successfully"
    })
    
}

const deleteUser = async (req,res)=>{
    const id = req.params.id;
    const deleteUser = await User.deleteOne({_id:id})
    res.json({
        message:"delete successfull"
    })
}



module.exports = { showUser, storeUser ,userById,updateUser,deleteUser}