const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const {user:User} = require('../db');

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },




  login: async (parent,{ email, password },{db}) => {
    const user = await db.user.findOne({ email: email });
    console.log("hi");
    if (!user) {
      throw new Error('User does not exist!');
    }
    //bcrypt 
    const isEqual = await compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
};