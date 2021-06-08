import React from 'react'

import NotificatoinImg from '../public/Notification.svg';
import UserImg from '../public/User.svg';

import MainBody from './MainBody';

export default function MainContainer() {
    return (
        <div className="Main_container">
            <header className="Main_header">
                <div className="Header_left">Hi Sharon James, welcome to Mybank</div>
                <div className="Header_right">
                    <div className="Header_rightIcons shadow notIcon">
                        <img src={NotificatoinImg} alt="" />
                        <div className="notIconCount">2</div>
                    </div>
                    <div className="Header_rightIcons user"><img src={UserImg} alt="" /></div>
                </div>
            </header>
            <main>
                <MainBody />
            </main>
        </div>
    )
}
