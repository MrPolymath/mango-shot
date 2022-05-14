// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

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
    // if succesful, return a 200
    res.status(200).json({ message: "success" });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: "only supports POST" });
  }
}
