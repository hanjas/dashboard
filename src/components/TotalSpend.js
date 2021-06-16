import React, { useState, useEffect } from 'react'
import {epochUtil} from '../utils/dateUtils';


import cartImg from '../public/CartSmall.svg';
import Calendar from '../public/Calendar.svg';
import Entertrainment from '../public/Entertrainment.svg';
import Fork from '../public/Fork.svg';
import DropDown from '../public/DropDown.svg';

import PieChartTemp from './PieChartTemp'

export default function TotalSpend() {

    const [dateVal, setDateVal] = useState(null);
    
    useEffect(() => {
        setDateVal(epochUtil(Date.now()).format("b YYYY"));
    }, [])

    const [transList] = useState([
        {
            name: "Shopping",
            icon: cartImg,
            percentage: 20,
            iconclr: '#7478DA',
            id: 1,
        },
        {
            name: "EMI",
            icon: Calendar,
            percentage: 20,
            iconclr: '#FA9778',
            id: 2,
        },
        {
            name: "Entertainment",
            icon: Entertrainment,
            percentage: 20,
            iconclr: '#52B3F9',
            id: 3,
        },
        {
            name: "Cafe & Restaurant",
            icon: Fork,
            percentage: 20,
            iconclr: '#8EDCA4',
            id: 4,
        },
        {
            name: "Shopping",
            icon: cartImg,
            percentage: 20,
            iconclr: '#F97A7A',
            id: 5,
        },
        {
            name: "EMI",
            icon: Calendar,
            percentage: 20,
            iconclr: '#FA9778',
            id: 6,
        },
        {
            name: "Entertainment",
            icon: Entertrainment,
            percentage: 20,
            iconclr: '#52B3F9',
            id: 7,
        },
        {
            name: "Cafe & Restaurant",
            icon: Fork,
            percentage: 20,
            iconclr: '#8EDCA4',
            id: 8,
        }
    ]);

    return (
        <div className="Total_spend">
            <header>
                <div className="Portion_header">
                    <div className="Portion_hTitle">Total Spend in Percentage</div>
                    <div className="Portion_hRight">
                        <div className="Date_picker">
                            <div className="Date_text">{dateVal} <img src={DropDown} alt="" /> </div>
                            <div className="Date_datePicker"><input type="date" /></div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="Total_spendBodyL">
                    <PieChartTemp />
                </div>
                <div className="Total_spendBodyR">


                    <div className="Totalspend_list">

                        {transList.map((trans) => (
                            <div className="Totalspend_listItem" key={trans.id}>
                                <div className="Totalspend_listIcon" style={{background: trans.iconclr}}>
                                    <img src={trans.icon} alt="" />
                                </div>
                                <div className="Totalspend_listName">
                                    {trans.name}
                                </div>
                                <div className="Totalspend_listPercentage">{trans.percentage}%</div>
                            </div>
                        ))}

                    </div>


                </div>
            </main>
        </div>
    )
}
