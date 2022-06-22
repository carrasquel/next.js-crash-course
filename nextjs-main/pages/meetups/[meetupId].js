import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props){

    const meetupDetails = props.meetup;

    return <MeetupDetails {...meetupDetails}></MeetupDetails>;
}

export async function getStaticPaths(){
    // fetch ids anyhow and generate
    return {
        paths: [
            {
                params: {
                    meetupId: "1"
                }
            },
            {
                params: {
                    meetupId: "2"
                }
            }
        ],
        fallback: false
    }   
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetup: {
                id: 1,
                title: "First Meetup",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg/1280px-Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg",
                address: "C.C. San Ignacio",
                description: "This is a first meetup!"
            }
        }
    }
}

export default MeetupDetailsPage;