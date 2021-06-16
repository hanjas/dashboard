import React, { useState } from 'react'

import carImg from '../public/Car.svg';
import cartImg from '../public/Cart.svg';
import dollarImg from '../public/Dollar.svg';
import flashImg from '../public/Flash.svg';
import arrowRed from '../public/ArrowRed.svg';
import arrowGreen from '../public/ArrowGreen.svg';

export default function Transactions() {

    const [transList] = useState([
        {
            maintitle: "Vehicle EMI",
            subtitle: "Maruthi Suzuki fincorp",
            time: "28/05/2021 at 12:30 PM",
            icon: carImg,
            iconclr: '#52B3F9',
            amountindicator: arrowRed,
            amount: -9500,
            id: 1
        },
        {
            maintitle: "Supplies",
            subtitle: "Freshco hyper market",
            time: "28/05/2021 at 12:30 PM",
            icon: cartImg,
            iconclr: '#FA9778',
            amountindicator: arrowRed,
            amount: -3545,
            id: 2
        },
        {
            maintitle: "Salary Credited",
            subtitle: "Amazon private ltd.",
            time: "28/05/2021 at 12:30 PM",
            icon: dollarImg,
            iconclr: '#8EDCA4',
            amountindicator: arrowGreen,
            amount: '+400000',
            id: 3
        },
        {
            maintitle: "Recharge",
            subtitle: "Phonepe private ltd.",
            time: "28/05/2021 at 12:30 PM",
            icon: flashImg,
            iconclr: '#F97A7A',
            amountindicator: arrowRed,
            amount: -1250,
            id: 4
        },
        {
            maintitle: "Vehicle EMI",
            subtitle: "Maruthi Suzuki fincorp",
            time: "28/05/2021 at 12:30 PM",
            icon: carImg,
            iconclr: '#52B3F9',
            amountindicator: arrowRed,
            amount: -9500,
            id: 5
        },
        {
            maintitle: "Vehicle EMI",
            subtitle: "Maruthi Suzuki fincorp",
            time: "28/05/2021 at 12:30 PM",
            icon: dollarImg,
            iconclr: '#8EDCA4',
            amountindicator: arrowRed,
            amount: -9500,
            id: 6
        },
        {
            maintitle: "Vehicle EMI",
            subtitle: "Maruthi Suzuki fincorp",
            time: "28/05/2021 at 12:30 PM",
            icon: flashImg,
            iconclr: '#F97A7A',
            amountindicator: arrowRed,
            amount: -9500,
            id: 7
        },
    ]);

    return (
        <div className="Transaction">
            <div className="Trans_header">Transaction</div>
            <div className="Trans_container">
                <div className="Trans_list">

                    {transList.map((trans) => (
                        <div className="Trans_listItem" key={trans.id}>
                            <div className="Trans_listIcon" style={{background: trans.iconclr}}>
                                <img src={trans.icon} alt="" />
                            </div>
                            <div className="Trans_listName">
                                <div className="Trans_listNameMain">{trans.maintitle}</div>
                                <div className="Trans_listNameSub">{trans.subtitle}</div>
                            </div>
                            <div className="Trans_listTime">{trans.time}</div>
                            <div className="Trans_listAmount">
                                <div className="Trans_listAmountType"><img src={trans.amountindicator} alt="" /></div>
                                <div className="Trans_listAmountTypeNumber">{trans.amount}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
