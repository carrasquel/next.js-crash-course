import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: "First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg/1280px-Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg",
        address: "C.C. San Ignacio",
        description: "This is a first meetup!"
    },
    {
        id: 2,
        title: "Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg/1280px-Panoramic_view_of_Caracas%2C_Venezuela_1900_restored_version.jpg",
        address: "C.C. San Ignacio",
        description: "This is a first meetup!"
    },
]

function HomePage() {
 return (
    <MeetupList
        meetups={DUMMY_MEETUPS}
    />
 )
}

export default HomePage;