
import { useState } from 'react'
import * as S from './Newsletter.styles'

export default function Home() {
    const [state, setState] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    // 0 - initial , 1 - loading, 2 - success, 3 - error


    const subscribe = async (e: any) => {
        e.preventDefault();

        setState(2);

        setErrorMsg("");
        console.log(e.target[0].value);
        try {
            const res = await fetch('/api/newsletter', {
                method: "POST",
                body: e.target[0].value,
            });
            const data = await res.json();
            if (data.error !== null) {
                throw data.error;
            }


        } catch (e) {
            setErrorMsg('');
            setState(3);
        }
    };




    return (

        <S.div>
            {state === 2 ? (

                <S.PopUp>
                    <p className="font-medium mt-4 text-xl text-green-800">

                        Thank you for subscribing to our newsletter!</p></S.PopUp>
            ) : (

                <S.Form><form onSubmit={subscribe} className="flex flex-col mb-9 mt-4" style={{ display: 'flex' }}>
                    <S.EmailPlaceholder><input required placeholder="Email address" type="email" style={{ border: 'none', fontSize: '17px' }} /></S.EmailPlaceholder>
                    <S.EmailBtn type="submit">Subscribe</S.EmailBtn>
                    {state === 3 ? <p className="text-red-500 mt-3">{errorMsg}</p> : ''}
                </form></S.Form>
            )
            }
        </S.div>

    )
}




