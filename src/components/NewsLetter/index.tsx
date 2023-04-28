import React, { useState } from 'react'
import * as S from './Newsletter.styles'


type Level = number
type ErrorMsg = string | null

type ApiResponse = {
    error: string | null
}

export default function Home(): JSX.Element {
    const [level, setLevel] = useState(1)
    const [errorMsg, setErrorMsg] = useState("")

    const subscribe = async (e: any) => {
        e.preventDefault()

        setLevel(2)

        setErrorMsg(' ')
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                body: e.target[0].value,
            })
            const data = await res.json()

            console.log(data);




        } catch (e) {
            setErrorMsg('')
        }

        console.log(level);

    }
    return (


        <div style={{ width: '45%', height: '100%', display: 'block', position: 'absolute', zIndex: 1000, top: '90%' }}>
            {level === 2 ? (

                <p className="font-medium mt-4 text-xl text-green-800" style={{ color: 'black', fontSize: '17px', backgroundColor: 'white', padding: '10px', margin: '10px' }}>

                    Thanks for subscribing, you will receive mail once we launch our
                    website.

                </p>

            ) : (

                <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
                    <input required placeholder="Email address" type="email" style={{ backgroundColor: 'white', color: 'black', padding: '10px', margin: '10px', border: 'none', fontSize: '17px' }} />
                    <button type="submit" style={{ padding: '10px', margin: '10px', border: 'none', backgroundColor: 'black', color: 'white', fontSize: '17px' }}>Subscribe</button>
                    {level === 3 ? <p className="text-red-500 mt-3">{errorMsg}</p> : ''}
                </form>

            )
            }
        </div >

    )
}
