import React from 'react'

import IncomeImg from '../public/Income.svg';
import Expence from '../public/Expence.svg';
// import ArrowDownBlue from '../public/ArrowDownBlue.svg';
import ArrowGreen from '../public/ArrowGreen.svg';
import ArrowRed from '../public/ArrowRed.svg';

export default function IncomeExpence() {

    return (
        <div className="IncomeExpence">
            <div className="IncomeExpence_box">

                <div className="IncomeExpence_boxItem">
                    <div className="IncomeExpence_boxItemIcon">
                        <img src={ArrowGreen} alt="" />
                        <img src={IncomeImg} alt="" />
                    </div>
                    <div className="IncomeExpence_boxAmountBox">
                        <div className="IncomeExpence_boxAmountText">Income</div>
                        <div className="IncomeExpence_boxAmount">&#8377; 1,37000</div>
                    </div>
                </div>


                <div className="IncomeExpence_boxItem">
                    <div className="IncomeExpence_boxItemIcon">
                        <img src={ArrowRed} alt="" />
                        <img src={Expence} alt="" />
                    </div>
                    <div className="IncomeExpence_boxAmountBox">
                        <div className="IncomeExpence_boxAmountText">Expences</div>
                        <div className="IncomeExpence_boxAmount">&#8377; 94,000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
