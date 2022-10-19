const { rbmqConnection } = require("./utils");

const queueName = "emailQueue";

const emailPublisher = async (email) => {
  try {
    const connection = await rbmqConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ email })));
    console.log("Email sent to queue");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { emailPublisher };
