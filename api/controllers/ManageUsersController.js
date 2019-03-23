/**
 * ManageUsersController
 *
 * @description :: Server-side actions for handling user transactions.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

      //Controller action for 'GET /get_users'
      getUsers : function(req,res){
        Users.find().exec(function(err,users){
        // Users.find({ select : ['id','username','is_logged_in'] }).exec(function(err,users){
        // Users.find({ where: { id : 1 }, select:  ['username','is_logged_in'] }).exec(function(err,users){
            if(err){
                return res.json({ "status" : -1, "error": err });
            }else if(users){
                return res.json({ "status": 0, "users": users})
            }
        })
      },
  

      //Controller action for 'POST /register_user'
      registerUser: function(req, res) {
        var parameters = req.body;
        console.log("parameters:" + JSON.stringify(parameters));

        Users.findOrCreate({ username: parameters.username}, 
                           { username: parameters.username, password: parameters.password})
                           .exec(function(err,user,wasCreated){
                               console.log("user:"+JSON.stringify(user)+" wasCreated:"+wasCreated)
                                if(err){
                                    return res.json({ "status": -1, "error": "There was an error while registering the user. \n" + err });
                                }else if(wasCreated){
                                    return res.json({ "status": 0, "message": "User registered successfully"});
                                }else{
                                    return res.json({ "status": -1, "error": "Username already exists"});
                                }   
                           })
    },


    //Controller action for 'PUT /login_user'
    loginUser: function(req, res) {
        var parameters = req.body;
        console.log("parameters:" + JSON.stringify(parameters));


        Users.update({ username: parameters.username, password: parameters.password })
            .set({ is_logged_in: true })
            .fetch()
            .exec(function(err, user) {
                console.log("USER:" + JSON.stringify(user))
                if (err) {
                    return res.json({ "status": -1, "error": "There was an error while logging in. \n" + err });
                } else if (user && user.length == 1) {
                    return res.json({ "status": 0, "message": "User logged in successfully" });
                } else if (!user || user.length == 0) {
                    return res.json({ "status": -1, "error": "Error while logging in, please check your username and password." });
                }
            })
    },



    //Controller action for 'PUT /update_password'
    updatePassword: function(req, res) {
        var parameters = req.body;
        console.log("parameters:" + JSON.stringify(parameters));

        Users.update({ username: parameters.username, password: parameters.old_password })
            .set({ password: parameters.new_password })
            .fetch()
            .exec(function(err, user) {
                console.log("USER:" + JSON.stringify(user))
                if (err) {
                    return res.json({ "status": -1, "error": "There was an error while updating the password. \n" + err });
                } else if (user && user.length == 1) {
                    return res.json({ "status": 0, "message": "Password changed successfully" });
                } else if (!user || user.length == 0) {
                    return res.json({ "status": -1, "error": "Please check your username and old password." });
                }
            })
    },



    //Controller action for 'DELETE /delete_user'
    deleteUser: function(req, res) {
        var parameters = req.body;
        console.log("parameters:" + JSON.stringify(parameters));

        Users.destroy({ username: parameters.username, password: parameters.password })
            .fetch()
            .exec(function(err, user) {
                console.log("Deleted User: " + JSON.stringify(user))
                if (err) {
                    return res.json({ "status": -1, "error": "There was an error while deleting the user. \n" + err });
                } else if (user && user.length == 1) {
                    return res.json({ "status": 0, "message": "User " + parameters.username + " deleted." });
                } else if (!user || user.length == 0) {
                    return res.json({ "status": -1, "error": "There was an error while deleting the user." });
                }
            })
    }

};

