import userModel from "../model/userSchema.js";


export const homeControllers = async(req,res)=>{
    res.render('index');
}

export const createControllers = async(req,res)=>{
    const { name, city ,email, contact } = req.body;
    // Create a new FormData document
    const user = new userModel({
        name,
        city,
        email,
        contact,
    });

    await user.save();
    console.log(req.body);
    res.render('index');
}

export const readControllers = async(req,res)=>{
         try {
            const users = await userModel.find({}) 
            if(users){
                res.render('read.ejs',{'users':users});
            }else{
                res.render('read.ejs');
            }            
        } catch (error) {
            
        }
}

export const editController = async(req,res)=>{
    try {
        console.log(req.params.id);
        const user =await userModel.findById({'_id':req.params.id});
        if(user){
            res.render('edit',{'user':user});
        }else{
            res.render('edit');
        }

        
    } catch (error) {
        
    }
}


export const updateController = async(req,res)=>{
    try {
     const updatedRecord = await userModel.findByIdAndUpdate(req.params.id, req.body)
     if(updatedRecord){
        res.redirect('/read')
     }else{
        res.redirect('read')
     }
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteController = async(req,res)=>{
    try {
        const deleterecord = await userModel.findByIdAndDelete(req.params.id)
          if(deleterecord){
              res.redirect('/read')
          }else{
              res.redirect('/')
          }
        
      } catch (error) {
          
      }
}