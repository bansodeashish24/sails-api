/**
 * Users.js
 *
 * @description :: A model definition representing the 'users' table in the database.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'users',

  attributes: {

      username: {
        required: true,
        type: 'string'
      },

      password: {
        required: true,
        type: 'string'
      },

      is_logged_in: {
        type: 'boolean'
      },

      createdAt: { 
        type: 'ref',
        columnType: 'timestamp',
        autoCreatedAt: true
      },

      updatedAt: { 
        type: 'ref',
        columnType: 'timestamp',
        autoUpdatedAt: true 
      }

  }

};

