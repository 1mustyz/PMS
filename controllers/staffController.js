const Inmate = require('../models/inmate')
const {uuid} = require('uuidv4')
const msToTime = require('../middlewares/timeMiddleware')

// save inmate offences
exports.saveInmateOffence = async (req,res,next) => {
    const {inmateId,offence} = req.body
    offence.offenceId = uuid()
    offence.month = new Date().getMonth() + 1

    offence.createdAt = msToTime(new Date().getTime() + Math.abs((new Date().getTimezoneOffset() * 60000))) 
    offence.day = new Date().getDay()
    offence.year = new Date().getDay().getFullYear()

    // console.log(clientActions.createdAt)

    const inmate = await Inmate.findOneAndUpdate({inmateId},{$push:{"offence": offence}})
    console.log(offence)
    res.json({success: true, message: "inmate offence saved successfully", inmate});
}


// save inmate visitor
exports.saveInmateVisitor = async (req,res,next) => {
  const {inmateId,visitor} = req.body
  visitor.month = new Date().getMonth() + 1

  visitor.createdAt = msToTime(new Date().getTime() + Math.abs((new Date().getTimezoneOffset() * 60000))) 
  visitor.day = new Date().getDay()
  visitor.year = new Date().getDay().getFullYear()

  // console.log(clientActions.createdAt)

  const inmate = await Inmate.findOneAndUpdate({inmateId},{$push:{"visitor": visitor}})
  console.log(visitor)
  res.json({success: true, message: "inmate visitor saved successfully", inmate});
}



  