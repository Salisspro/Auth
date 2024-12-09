
import { useState } from "react"


export default function Auth() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")

    const handleClick = () => {
        try {
            console.log(` Thanks ${name} Your password is ${password}`);

        } catch (err) {
            console.error('err ', err);
        }
    }

    return (
        <div className="myDiv">
            <input
                className="my-input"
                type="text" onChange={(e) => setName(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>sign in</button>
            <p className="font-mono">Thanks for comming</p>
        </div>
    )
}

