import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" name="image" id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Descriptions</label>
                    <textarea name="description" id="description" />
                </div>
                <div className={classes.actions}>
                    <button>Add New Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
