import { MongoClient } from 'mongodb';

async function handler(req, res){

    if (method === "GET"){
        try {
            const data = req.body;
            const url = "mongodb://localhost:27017/meetups";

            const client = await MongoClient.connect(url);
            const db = client.db();

            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.find();
            console.log(result);
            client.close();
            res.status(200).json(result);
        } catch (err) {
            // 👇️ This runs
            console.log('Error: ', err.message);
        }
    }

}

export default handler;