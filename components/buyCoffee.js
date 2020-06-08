import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { GiCoffeeCup } from 'react-icons/gi';

import '../styles/buy-coffee.scss';

const BuyCoffee = ({ messages }) => {
    const [activeNumber, setActiveNumber] = useState(3);

    useEffect(() => {
        console.log('rendering...');
    }, [activeNumber]);

    const changeNumber = (num) => {
        setActiveNumber(num);
    };

    const inputChange = (e) => {
        e.preventDefault();
        setActiveNumber(e.target.value);
    };

    return (
        <div className="buy-coffee">
            <div className="supporters">
                <AiOutlineHeart fill="red" />
                <span>{messages.length} supporters</span>
            </div>
            <div className="coffee-options">
                {/* <h3>Buy Coffee</h3> */}

                <ul className="numbers">
                    <li className="coffee-icon">
                        <GiCoffeeCup size={24} />
                    </li>
                    <li className="coffee-icon">
                        <AiOutlineClose size={20} />
                    </li>
                    <li className="custom-number">
                        <input type="number" value={activeNumber} onChange={inputChange} />
                    </li>
                    <li onClick={() => changeNumber(1)} className={activeNumber === 1 ? 'number active' : 'number'}>
                        1
                    </li>
                    <li onClick={() => changeNumber(2)} className={activeNumber === 2 ? 'number active' : 'number'}>
                        2
                    </li>
                    <li onClick={() => changeNumber(3)} className={activeNumber === 3 ? 'number active' : 'number'}>
                        3
                    </li>
                    <li className="button">
                        <a href={`https://gum.co/rxqNq?quantity=${activeNumber}&wanted=true`}>
                            Support ${activeNumber * 5}
                        </a>
                    </li>
                </ul>

                {/* <ul>
                    <li>
                        <a href="https://gum.co/rxqNq">Buy my coffee</a>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default BuyCoffee;
