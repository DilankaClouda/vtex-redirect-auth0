import '../App.css';
import notVerifiedLogo from '../assets/image.png';
import { Button } from 'react-native';
import { useSession } from "../context/session"

export function Home(){
    const session = useSession();

    return (
        <div className="App">
            <header className="App-header">
            <img src={notVerifiedLogo} className="App-logo" alt="logo" />
            <p style={{color:'red'}}>
                Email address is not verified.
            </p>
            <p>
                Please verify your email and click continue.
            </p>
            <a className="App-Link" href={`https://dev-6tl1582u12a2iojr.us.auth0.com/continue?state=${session.state}`}>
                <Button title='Continue' color="#1875f7"></Button>
            </a>
            </header>
        </div>
    )
}