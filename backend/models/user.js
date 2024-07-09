const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
/*            email: { type: String, required: true },
            password: { type: String, required: true },
            role: { type: String, enum: ['casasud', 'casanord', 'doukkalaabda', 'nord', 'sud', 'oriental', 'rabattemara', 'fesmeknes', 'haouz', 'salegharb', 'tadlaouardigha', 'admin'], required: true }
        });
*/


// models/User.js

name:String,
      email:String,
      password:String,
      role:{type:String,enum:["admin","casanord","casasud","doukkalaabda",
                            "fesmeknes","haouz","nord","oriental",
                            "rabattemara","salegharb","sud","tadlaouardigha"], default:"casanord"},

})

const User=mongoose.model("User",userSchema)
module.exports=User


