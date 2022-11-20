import React from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [pause, setPause] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => updateClock(), 1000 );
        if (pause) {
            clearInterval(timer);
        } else {
            return () => {
                clearInterval(timer);
            };
        }
        
    });

    function updateClock() {
        setDate(new Date());
    }

    function pauseClock() {
        setPause(true);
    }

    function removePause() {
        setPause(false);
    }

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <button onClick={() => pauseClock()}>Пауза</button>
            <button onClick={() => removePause()}>Продовжити</button>
        </div>
    )
}

export default Clock