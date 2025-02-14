import fs from "fs";

const getAllQuestions = async (req, res) => {
    try{
        const data = fs.readFileSync("data/questions.json", "utf-8")
        const parsedData = JSON.parse(data);
        res.status(200).json(parsedData)
    } catch(error) {
        console.log("Error fetching data: ", error);
        res.status(500).json({error: error});
    }
}

export { getAllQuestions};