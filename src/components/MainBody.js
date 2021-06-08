import React from 'react'

import CardInfo from './CardInfo';
import Transactions from './Transactions';
import GraphTemp from './GraphTemp';

export default function MainBody() {
    return (
        <div className="Main_body">
            <div className="Main_bodyLeft">
                <CardInfo />
                <Transactions />
            </div>
            <div className="Main_bodyRight">
                <GraphTemp />
            </div>
        </div>
    )
}
