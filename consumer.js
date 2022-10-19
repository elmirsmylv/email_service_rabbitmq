const { rbmqConnection } = require("./utils");

const queueName = "emailQueue";

const consumeEmail = async () => {
  const connection = await rbmqConnection();
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName);

  channel.consume(queueName, (message) => {
    // Email sender function
    const mail = JSON.parse(message.content.toString());
    console.log(`Verification code sent to ${mail.email} successfuly`);
    channel.ack(message);
  });
};

consumeEmail();
