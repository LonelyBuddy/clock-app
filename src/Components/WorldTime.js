import React from 'react';
import './WorldTime.Style.scss';
// import Sun from '../Assets/desktop/icon-sun.svg';
import Moon from '../Assets/desktop/icon-moon.svg';

const WorldTime = () => {
    return (
        <section className="world-time">
            <p className="world-time__greeting">
                <img className="world-time__greeting-icon" src={Moon} alt="" />
                GOOD EVENING
            </p>

            <div>
                <span className="world-time__time">23:14</span>
                <span className="world-time__time-zone">BST</span>
            </div>

            <p className="world-time__location">IN LONDON, UK</p>
        </section>
    );
};

export default WorldTime;
