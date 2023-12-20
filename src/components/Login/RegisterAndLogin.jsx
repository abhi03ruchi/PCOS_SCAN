import React  from 'react';
import './Login.css';
import { database } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function RegisterAndLogin() {
    const [login, setLogin] = React.useState(false);
    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type === 'signup') {
            createUserWithEmailAndPassword(database, email, password)
                .then(data => {
                    console.log(data, "authData");
                    history('/');
                })
                .catch(err => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then(data => {
                    console.log(data, "authData");
                    history('/');
                })
                .catch(err => {
                    alert(err.code);
                });
        }
    };

    return (
        <div className='loginstyle'>
            {/* Blur background image */}
            <div className="bg"></div>
            {/* Registeration and login screen */}
            <div className='row'>
                <div className={login === false ? 'activeColor' : 'pointer'} onClick={() => setLogin(false)}>
                    SignUp
                </div>
                <div className={login === true ? 'activeColor' : 'pointer'} onClick={() => setLogin(true)}>
                    SignIn
                </div>
            </div>
            <h1>{login ? 'Sign In' : 'Sign Up'} </h1>
            <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
                <input type="text" name="email" placeholder='Email' /> <br />
                <input type="password" name="password" placeholder='Password' id="" /> <br /><br />
                <button type="submit">{login ? 'SignIn' : 'SignUp'}</button>
            </form>
        </div>
    );
}

export default RegisterAndLogin;
