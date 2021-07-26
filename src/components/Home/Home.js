import React from 'react';
import Header from './Header/Header';
import Icon from './Icon/Icon';
import Mission from './Mission/Mission';
import Stories from './Stories/Stories';

function Home(props) {
    return (
        <div>
            <Header></Header>
            <Icon></Icon>
            <Mission></Mission>
            <Stories></Stories>
        </div>
    );
}

export default Home;