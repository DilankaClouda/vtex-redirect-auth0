import '../App.css';
import notVerifiedLogo from '../assets/image.png';

export function End(){

    return (
        <div className="App">
            <header className="App-header">
            <img src={notVerifiedLogo} className="App-logo" alt="logo" />
            <p style={{color:'red'}}>
                Email address is not verified. Please verify the email and try again.
            </p>
            </header>
        </div>
    )
}