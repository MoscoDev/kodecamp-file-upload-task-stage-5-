const express=require("express") ;
const {users} =require('./model/database');
const {getSingleUser, getAllUsers, createNewUser, updateUser, deleteUser} = require('./controllers/users');
const app = express();
const multer =require('multer');
const {upload} = require('./config');
app.use(express.json({urlEncoded: false}))
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//   cb(null, './images')},

//   filename: (req, file, cb) =>{
//   cb(null, Date.now()+ '..' + file.originalname)
// }
// })

// const upload = multer({storage : fileStorageEngine})
/* get all users*/

app.get("/users", getAllUsers);
app.post('/single', upload.single('image'),(req, res) => {
  res.send('single file upload success');
  console.log(req.file.path)
})

/* get a user by id*/

// app.get("/users/:id", (req,res) =>{
//   const user = users.filter(user => {
//     if (user.id === req.params.id) {
//         res.json(user)
//     }
    
// }
//     )
 
//   }
//  );

app.get("/users/:id", getSingleUser)

/* create a new user*/
app.post("/users", createNewUser);

/* Update a user*/

app.put("/users/:id", upload.single('image'), updateUser);

/* Delete a user*/

app.delete("/users/:id", deleteUser)
/*
app.get("/user/:id", (req,res) =>{
  const deleteuser =  users.filter(deleteuser => deleteuser.id !== req.params.id);
  res.json(users)
};*/
        
app.listen(3000, ()=>{console.log("running on port 3000")
});