import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export async function addFeedback(req, res) {
  try {
    const { name, email, industry, feedback } = req.body;
    const data = await knex("feedback").insert({
      name,
      email,
      industry,
      feedback,
    });
    res
      .status(201)
      .json({ message: "Feedback added successfully", feedback: data });
  } catch (err) {
    console.log(err);
  }
}
