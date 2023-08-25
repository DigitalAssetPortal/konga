'use strict';

/**
 * api/base/model.js
 *
 * Base model for all sails.js models. This just contains some common code that every "nearly" every model uses.
 */
module.exports = {
  schema: true,
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true
    },
    // Relation to User object via created user id
    createdUser: {
      model: 'User',
      columnName: 'createdUserId',
    },
    // Relation to User object via updated user id
    updatedUser: {
      model: 'User',
      columnName: 'updatedUserId'
    },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true }
  }
};
