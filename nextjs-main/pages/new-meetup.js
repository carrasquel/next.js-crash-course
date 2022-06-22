import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Layout from "../components/layout/Layout";

function NewMeetup(){
    function addMeetupHandler(meetupData){
        console.log(meetupData);
    };

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
}

export default NewMeetup;