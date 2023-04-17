import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const NewMeetUpPage = () => {
    const history = useHistory();
    const addMeetupHandler = (meetupData) => {
        fetch(
            "https://meet-up-project-8a0be-default-rtdb.firebaseio.com//meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history.replace("/");
        });
    };
    return (
        <div>
            <h2>Add New Meetup</h2>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
};

export default NewMeetUpPage;
