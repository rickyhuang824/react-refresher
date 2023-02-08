import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
    return (
        <ul className={classes.list}>
            {meetups.map((meetup) => (
                <MeetupItem
                    image={meetup.image}
                    title={meetup.title}
                    description={meetup.description}
                    address={meetup.address}
                    key={meetup.id}
                    id={meetup.id}
                />
            ))}
        </ul>
    );
};

export default MeetupList;
