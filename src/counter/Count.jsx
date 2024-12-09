import { useState } from "react"

function Count() {
    const [count, setCount] = useState(0)

    const plus = async () => {
        setCount(priv => priv + 1)
    }

    const minus = async () => {
        setCount(priv => priv - 1)
    }
    return (
        <div className="container">
            <p className="para">{count}</p>
            <button 
            className="increment"
            onClick={plus}>Increment</button>

            <button 
            className="Decrement"
            onClick={minus}>Decreament</button>
        </div>
    )
}

export default Count