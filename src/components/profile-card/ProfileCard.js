import React from 'react';
import './ProfileCard.css'
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/usersSlice";

import Label from "../common/Label";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardList from "./ProfileCardList";
import SourceLinks from "../common/SourceLinks";



const ProfileCard = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));

    return (
        <section className="profile-card">
            <img className="profile-card__img" src="/images/profile.jpg" />

            <div className="profile-card__content">
                <Label text='Hello & Welcome' type='down'/>
                <ProfileCardTitle fullName={user?.fullName} grade={user?.grade} />

                <div className="delimiter" />

                <ProfileCardList fields={user?.profileInfo}/>

                <div className="profile-card__footer">
                    <SourceLinks />
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;