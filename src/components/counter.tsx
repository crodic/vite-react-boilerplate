import { sum } from '@/utils/sum';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(sum(count, 1));
    };

    return (
        <>
            <h1>Counter</h1>
            <button onClick={handleClick}>Count is: {count}</button>
        </>
    );
};

export default Counter;
