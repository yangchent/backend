const debug=(req,res,next)=>{
    console.log("Request received")
    next()
}
module.exports = debug;