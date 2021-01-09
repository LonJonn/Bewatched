import { NextApiHandler } from "next";

let video: string = null;

const handler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    res.json({ url: video });
  }

  if (req.method === "POST") {
    video = req.body.url;
    res.end();
  }
};

export default handler;
