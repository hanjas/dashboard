import React, {useState, useEffect} from 'react'
import {epochUtil} from '../utils/dateUtils';

import GraphTemp from './GraphTemp';
import DropDown from '../public/DropDown.svg';

export default function AccountStatus() {

    const [dateVal, setDateVal] = useState(null);
    
    useEffect(() => {
        setDateVal(epochUtil(Date.now()).format("b YYYY"));
    }, [])

    return (
        <div className="Accstatus">
            <header>
                <div className="Portion_header">
                    <div className="Portion_hTitle">Your Account Status</div>
                    <div className="Portion_hRight">
                        <div className="Date_picker">
                            <div className="Date_text">{dateVal} <img src={DropDown} alt="" /> </div>
                            <div className="Date_datePicker"><input type="date" /></div>
                        </div>
                    </div>
                </div>
            </header>
            <GraphTemp />
        </div>
    )
}
