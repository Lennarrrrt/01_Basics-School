import React, { useState } from 'react'

type Props = {}

export default function BackwardsCounter({ }: Props) {
    const [count, setCount] = useState(16)

    return (
        <button onClick={() => setCount(count - 1)}>
            Backwards Counter: {count}
        </button>
    )
}