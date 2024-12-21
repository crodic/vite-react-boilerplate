import { sum } from '@/utils/sum'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(sum(count, 1))
    }

    return (
        <>
            <h1>Counter</h1>
            <button
                className="px-4 py-2"
                onClick={handleClick}
            >
                Count is: {count}
            </button>
        </>
    )
}

export default Counter
