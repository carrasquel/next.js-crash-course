import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props){

    const meetupDetails = props.meetup;

    return <MeetupDetails {...meetupDetails}></MeetupDetails>;
}

export async function getStaticPaths(){
    // fetch ids anyhow and generate
    try {
        const url = "mongodb://localhost:27017/meetups";

        const client = await MongoClient.connect(url);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.find({}, {_id: 1}).toArray();
        console.log(result);
        client.close();

        const paths = result.map(meetup => (
            {
                params: {
                    meetupId: meetup._id.toString()
                }
            }
        ))
        
        return {
            paths: paths,
            fallback: false
        }

    } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
    }
   
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    try {
        const url = "mongodb://localhost:27017/meetups";

        const client = await MongoClient.connect(url);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
        console.log(result);
        client.close();

        return {
            props: {
                meetup: {
                    id: result._id.toString(),
                    title: result.title,
                    image: result.image,
                    address: result.address,
                    description: result.description
                }
            }
        }
    } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
    }
}

export default MeetupDetailsPage;