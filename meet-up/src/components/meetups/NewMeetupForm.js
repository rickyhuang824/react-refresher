import React, { useState } from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        onAddMeetup(meetupData);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="url"
                        name="image"
                        id="image"
                        ref={imageInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        ref={addressInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Descriptions</label>
                    <textarea
                        name="description"
                        id="description"
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Add New Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
