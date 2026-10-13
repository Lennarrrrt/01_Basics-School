
import { useState, useEffect } from 'react'
import './SecretButton.css'

export default function SecretButton() {
    const [show, setShow] = useState(false)

    // STEP 2 GOES HERE 👇
    useEffect(() => {
        if (!show) return

        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [show])

    return (
        <>
            <button onClick={() => setShow(true)}>
                This Button does Nothing
            </button>

            {show && (
                <div className="overlay">
                    <img
                        src="https://gifdb.com/images/file/fnaf-jumpscare-gif-file-750kb-a68smt9tylqg8340.gif"
                        alt=""
                    />
                </div>
            )}
        </>
    )
}
