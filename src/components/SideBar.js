import React from 'react'

import LOGO from '../public/Logo.svg'
import Dashboard from '../public/Dashboard.svg';
import Payment from '../public/payment.svg';
import Savings from '../public/Savings.svg';
import Settings from '../public/Settings.svg';
import Support from '../public/support.svg';
import Logout from '../public/Logout.svg';

export default function SideBar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar_logo">
                <img src={LOGO} alt="" />
            </div>
            <div className="Sidebar_list">
                <div><img src={Dashboard} alt="" />Dashboard</div>
                <div><img src={Payment} alt="" />Payment</div>
                <div><img src={Savings} alt="" />Savings</div>
                <div><img src={Settings} alt="" />Settings</div>
                <div><img src={Support} alt="" />Support</div>
            </div>
            <div className="Sidebar_logout"><img src={Logout} alt="" />Logout</div>
        </div>
    )
}
