import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import dotenv from 'dotenv'
dotenv.config()

const client = new SQSClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID || '',
    secretAccessKey: process.env.SECRET_ACCESS_KEY || '',
  },
});

async function init() {
  const command = new ReceiveMessageCommand({
    QueueUrl:
      "https://sqs.ap-south-1.amazonaws.com/533266978672/vsaTempVideoS3queue",
    MaxNumberOfMessages: 1,
    WaitTimeSeconds: 20,
  });

  while (true) {
    const { Messages } = await client.send(command);
    if (!Messages) {
      console.log("No message in queue");
      continue;
    }

    for (const message of Messages) {
      const { MessageId, Body } = message;
      console.log("Message Received", { MessageId, Body });
    }
  }
}

init()
