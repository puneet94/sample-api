

const roomController = {};
 roomController.roomsList = async (req, res, next) =>{
    
    try{
        
        res.status(200).json({"hellow":"word", "value":process.env.EXAMPLE_TIMES});
    }
    catch(err){
        next(err)
    }
}

module.exports = roomController;