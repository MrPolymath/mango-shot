// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

type Data = {
  message: string;
};

const client = new S3Client({ region: "EU-1" });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    console.log("body: ", req.body);
    const uuid = req.body.uuid;
    const image = req.body.image;
    // add code to upload to s3
    // async/await.
    try {
      // const command = new GetObjectCommand(input);
      // const response = await client.send(command);
      // const data = await client.send(GetObjectCommand);
      // process data.
    } catch (error) {
      // error handling.
    } finally {
      // finally.
    }
    // if succesful, return a 200
    res.status(200).json({ message: "success" });
  }
  // else if the method is a GET
  else if (req.method === "GET") {
    // get image from s3
    // if successful, return the image
    // else, return an error
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: "only supports POST" });
  }
}
