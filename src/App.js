import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "./features/usersSlice";

import Container from './components/common/Container';
import Header from "./components/header/Header";
import ProfileCard from "./components/profile-card/ProfileCard";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

const App = () => {
    const dispatch = useDispatch();
    const postStatus = useSelector((state) => state.users.status);

    const userId = 1;

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchUsers({id: userId}));
        }
    }, [postStatus, dispatch]);

    return (
        <>
            <div className="header-string"/>

            <Container>
                <Header userId={userId}/>
                <ProfileCard userId={userId}/>
                <Skills userId={userId}/>
                <Education userId={userId}/>
            </Container>
        </>
    )
};

export default App;
