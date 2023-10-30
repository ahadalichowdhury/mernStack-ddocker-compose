const registerModel = require("../models/registerModel")


exports.registration = async (req, res) => {
    try {
        let reqBody = req.body;

        // Validate reqBody here if necessary

        const data = await registerModel.create(reqBody);
        if (!data) {
            return res.status(404).json({
                status: "failed",
                message: "User data not found"
            });
        }

        res.status(200).json({
            status: "success",
            message: "User created successfully",
            data: data
        });
    } catch (err) {
        console.error("Error occurred during registration:", err);
        return res.status(500).json({
            status: "failed",
            message: "Something went wrong",
            error: err.message
        });
    }
};

exports.userDetails = async(req,res)=>{
    try {
        const userData = await registerModel.find();
        if(!userData){
            return res.status(404).json({
                status:"failed",
                message:"User data not found"
            })
        }else{
            res.status(200).json({
                status:"success",
                message:"User data found",
                data:userData
            })
        }
    } catch (error) {
        
    }
}
    