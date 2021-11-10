import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import travelImage from '../assets/images/img-9.jpg';
import islandImage from '../assets/images/img-2.jpg';
import oceanImage from '../assets/images/img-3.jpg';
import stadiumImage from '../assets/images/img-4.jpg';
import safariImage from '../assets/images/img-8.jpg';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={travelImage}
                            text="Explore the hidden waterfall deep"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src={islandImage}
                            text="Travel through the Islands of Bali"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={oceanImage}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={stadiumImage}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={safariImage}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
