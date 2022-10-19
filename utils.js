const amqp = require("amqplib");

const rbmqConnection = async (email) => {
  const connection = await amqp.connect();
  return connection;
};

module.exports = { rbmqConnection };
