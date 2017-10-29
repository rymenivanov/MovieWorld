var User =require('../app/model/userModel')
module.exports = function(router){
//http//localhost:5000/users    tuk testvai s uploada , koito shte pravi fronta da napravi dolnite regexi
    router.put('/users',function (req,res) {
    var user = new User()
    user.username=req.body.username
    user.password=req.body.password
    user.email=req.body.email;
    if (req.body.username ==null || req.body.username ==''||req.body.password==''||req.body.email=='') {
      res.send("ensure username and every shit is provided")
    }
    else{
      user.save(function (err) {
        if (err) {
          res.send("Username or email already exists")
        }
        else{
          res.send("oksssss")
        }
      })
    }
    
    user.save();
    // res.send("/user sended via Post")
    //  ako iskate da vidite dali vliza v iffa shte vi izkara edinichno suobshtenie sus res.send i shte crashne bazata zaredi responce headera
    
  })
  return router    
}
