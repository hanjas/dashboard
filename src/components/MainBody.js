import React from 'react'

import CardInfo from './CardInfo';
import Transactions from './Transactions';
import AccountStatus from './AccountStatus';
// import GraphTemp from './GraphTemp';
import IncomeExpence from './IncomeExpence';
import TotalSpend from './TotalSpend';

export default function MainBody() {
    return (
        <div className="Main_body">
            <div className="Main_bodyLeft">
                <CardInfo />
                <Transactions />
            </div>
            <div className="Main_bodyRight">
                {/* <GraphTemp /> */}
                <AccountStatus />
                <IncomeExpence />
                <TotalSpend />
            </div>
        </div>
    )
}
