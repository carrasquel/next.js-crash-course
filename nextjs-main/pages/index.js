import { MongoClient } from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";


function HomePage(props) {
    return (
        <MeetupList
            meetups={props.meetups}
        />
 )
}

export async function getServerSideProps(context) {
    // fetch data anyhow

    const req = context.req;
    const res = context.resp;

    try {
        const url = "mongodb://localhost:27017/meetups";

        const client = await MongoClient.connect(url);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.find().toArray();
        console.log(result);
        client.close();
        
        return {
            props: {
                meetups: result.map(meetup => ({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                }))
            }
        }

    } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
    }
}

// export async function getStaticProps() {
//     // fetch data anyhow
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 20
//     }
// }

export default HomePage;