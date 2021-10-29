const {users} =require('../model/database');
const multer =require('multer')


exports.getAllUsers = function(req,res){
   res.json(users)
} 


exports.getSingleUser = function (req, res)  {

        const user = users.find(user =>{

          

           if (user.id === req.params.id) {

             return user

           } else {

            

           }

         })

         if (user) {

           res.status(200).send(user)

         }else{

          res.status(404).send('user not found')

      

         }

         return(res)

       }

       

exports.createNewUser = function  (req,res){
  
    users.push({
    "firstName" : req.body.firstName,
    "lastName" :req.body.lastName,
    "id" : (Number(users[users.length -1].id) + 1).toString()
  });
  res.send(users)
} 



exports.updateUser = function (req,res) {
  const user = users.find(user =>{
    
    if (user.id === req.params.id) {
      return user
    } else {
     
    }
  })
  if (user) {
    console.log(req.file.path)
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
    user.photo = req.file.filename;
  res.status(400).json(users)
  } else {
    res.status(200).json("no user found");
  }
  

};



exports.deleteUser = function (req, res){
  const user = users.find(user =>{
    
     if (user.id === req.params.id) {
       return user
     } else {
      
     }
   })
   if (user) {
     console.log()
    users.splice(users.indexOf(user), 1);
     res.status(200).send(users)
   }else{
    res.status(404).send('user not found')

   }
}
