const { User } = require('../db')
  
module.exports.clean = async () => {
  return User.truncate({cascade: true})
             .then(() => console.log("Cleaned Test DB!"))
};
  