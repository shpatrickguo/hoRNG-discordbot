const memberCounter = require('./counters/member-counter');

module.exports = () => {
  console.log("hoRNG-bot is online");
  memberCounter(client);
};
