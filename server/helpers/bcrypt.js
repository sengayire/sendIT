// for hasing data passowrd before inserted in database

import bcrypt from 'bcrypt';

export default {

  hashPassword: password => bcrypt.hashSync(password, bcrypt.genSaltSync(8)),

  comparePassword: (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword),
};
