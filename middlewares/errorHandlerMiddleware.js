const errorHandlerMiddleware=(req,res)=>{res.status(500).json({message:"Internal server error"})}

export default errorHandlerMiddleware;