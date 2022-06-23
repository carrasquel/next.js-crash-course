import { useRouter } from 'next/router';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Layout from "../components/layout/Layout";

function NewMeetup(){
    const router = useRouter();
    async function addMeetupHandler(meetupData){
        console.log(meetupData);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.push('/');
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
}

export default NewMeetup;