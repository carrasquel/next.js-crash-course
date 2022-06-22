import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(){

    const meetupDetails = {
        id: 1,
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg/1280px-Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg",
        address: "C.C. San Ignacio",
        description: "This is a first meetup!"
    };

    return <MeetupDetails {...meetupDetails}></MeetupDetails>;
}

export default MeetupDetailsPage;