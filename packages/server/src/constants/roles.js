const ROLES_ARRAY = Object.freeze(["SUPERUSER", "ADMIN", "USER"]); // Array of role names, in order of highest to lowest privileges
const DEFAULT_ROLE = ROLES_ARRAY[ROLES_ARRAY.length - 1]; // Default role
const rolesObject = {}; // Internally stored roles object

/**
 * @typedef {Object} Role
 * @desc    An object containing information about a particular role.
 * @param   {String} key - The name of the role
 * @param   {Number} id  - The ID of the role, representing the precedence of the role (lower numbers have more privileges)
 */

/**
 * @typedef {Object.<string, Role>} Roles
 * @desc An collection of Role objects in a map form
 */

/**
 * Function that gets key-value pair mappings of role names and their precedence.
 *
 * This is returned as an object instead of an outright array for constant-time access rather than
 * linear-time access when comparing roles during an array lookup.
 *
 * @returns {Roles}
 */
const getRoles = () => {
  if (Object.keys(rolesObject).length < ROLES_ARRAY.length) {
    ROLES_ARRAY.forEach((roleName, index) => {
      rolesObject[roleName] = {
        key: roleName,
        id: index,
      };
    });
  }

  return rolesObject;
};

module.exports = {
  getRoles,
  DEFAULT_ROLE,
  ROLES_ARRAY,
};
