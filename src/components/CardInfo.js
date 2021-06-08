import React from 'react'

import greaterThanImg from '../public/GreaterThan.svg';
import chipImg from '../public/Chip.svg';
import visaImg from '../public/Visa.svg';
import lessThanImg from '../public/LessThan.svg'
// import cardEllipseImg from '../public/CardEllipse.svg'

export default function CardInfo() {
    return (
        <div className="Card_details">
            <div className="Card_header">
                <div className="Card_headerTitle">Your Cards Details</div>
                <div className="Card_addCard">
                    <div className="Addcard_icon">+</div>
                    Add card
                </div>
            </div>
            <div className="Card_body">
                <div className="Card_prevBtn">
                    <div className="Card_btn"><img src={greaterThanImg} alt="" /></div>
                </div>

                <div className="Card_cardPreview">

                    <div className="Card_ellipse"></div>
                    {/* <img src={cardEllipseImg} alt="" /> */}

                    <div className="Card_content">
                        <div className="Card_top">
                            <div className="Card_Name">Mycard
                                <div className="Card_chip"><img src={chipImg} alt="" /></div>
                            </div>
                            <div className="Card_type">Platinum</div>
                        </div>

                        <div className="Card_center">
                            <div className="Card_number">2546 5455 0603 3455</div>
                            <div className="Card_validity">
                                <div className="Card_validityText">VALID<br/>THRU</div>
                                06/25
                            </div>
                        </div>

                        <div className="Card_footer">
                            <div className="Card_bal">
                                <div className="Card_balText">Total balance</div>
                                &#8377; 2,57000
                            </div>
                            <div className="Card_icon"><img src={visaImg} alt="" /></div>
                        </div>
                    </div>

                </div>

                <div className="Card_nextBtn">
                    <div className="Card_btn"><img src={lessThanImg} alt="" /></div>
                </div>
            </div>
            <div className="Card_cardsButtons">
                <div className="active"></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
