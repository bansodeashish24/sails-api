/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'GET /helloworld':{
    controller: 'Logic',
    action: 'printHelloWorld',
    cors: {
      allowOrigins: '*'
    }
  },


    'GET /getabsolutevalue/:number': {
    controller: 'Logic',
    action: 'getAbsoluteValue',
    cors: {
      allowOrigins: '*'
    }
  },


  'POST /calculate': {
    controller: 'Logic',
    action: 'calculateValue',
    cors: {
      allowOrigins: '*'
    }
  },


  //User related routes
  'GET /get_users': {
    controller: 'ManageUsers',
    action: 'getUsers',
    cors: {
      allowOrigins: '*'
    }
  },


  'POST /register_user': {
    controller: 'ManageUsers',
    action: 'registerUser',
    cors: {
      allowOrigins: '*'
    }
  },


  'PUT /login_user': {
    controller: 'ManageUsers',
    action: 'loginUser',
    cors: {
      allowOrigins: '*'
    }
  },

  'PUT /update_password': {
    controller: 'ManageUsers',
    action: 'updatePassword',
    cors: {
      allowOrigins: '*'
    }
  },

  'DELETE /delete_user': {
    controller: 'ManageUsers',
    action: 'deleteUser',
    cors: {
      allowOrigins: '*'
    }
  }


};
