import { useState } from "react";
import style from '../login/login.module.scss'
import { useAuth } from "../../providers/useAuth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/layout/logo.svg"
import { Title } from "../../components/title/title";
import eyeOpenIcon  from '../../assets/images/layout/eye-open-icon.svg'
import eyeClosedIcon from '../../assets/images/layout/eye-closed-icon.svg'
import { Button } from "../../components/button/button";



export const Login = () => {
    const [username, setUsername] = useState('') //state for storing of username from input
    const [password, setPassword] = useState('') //state for storing of password from input
    const [showPassword, setShowPassword] = useState(false) //state for toggeling if the password is shown or not

    const { setLoginData } = useAuth() //function from auth context for update login state
    const navigate = useNavigate() //for redirection user after successful login

    //handles login form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents default sumbission behavior
        console.log('form submitted');

        try {
            //attempts to login with provided username + password
            const response = await fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
        
                body: new URLSearchParams({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json() //parses the json response
            if (data.token) {
                //if token is recieved, saves it + users details in session storage
                sessionStorage.setItem('token', JSON.stringify(data.token))
                setLoginData({ user: data.user, token: data.token })
                console.log('logged in')
                toast.success(`Logget ind som  ${data.user.firstname} ${data.user.lastname}`, {
                    onClose: () => {
                        navigate('/frontpage') //navigates after successful login
                    }
                })
            }
        } catch (error) {
            console.error("Login error:", error);
            console.log('not logged in');
            toast.error("Kunne ikke logge ind, prøv igen");
        }
    }

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <div className={style.wrapper}>
            <div className={style.textContainer}>
                <div className={style.logo}>
                    <img src={logo} alt="Affaldsguiden Logo" />
                    <Title title='Affaldsguiden' />
                </div>
                <p>Log ind på Affaldsguiden
                    <br />
                     for at anmelde stationer</p>
            </div>
            <div className={style.formContainer}>
                <div className={style.formCard}>
                    <h2 className={style.header}>Log ind</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Brugernavn"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className={style.passwordField}>
                            <input
                                type={showPassword ? "text" : "password"} //toggle between text/password input types based on the showPassword state
                                placeholder="Adgangskode"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={style.passwordInput}
                            />
                            <button
                                type="button"
                                onClick={toggleShowPassword}
                                className={style.passwordToggle}
                            >
                                {/* icon changes based on password is shown or hidden */}
                                <img src={showPassword ? eyeClosedIcon : eyeOpenIcon} alt="toggle password visibility" />
                              
                            </button>
                        </div>
                        <Button
                        text="Log ind" 
                        className={style.loginBtn}
                        onClick={handleSubmit}
                    />
                    </form>
                </div>
            </div>

        </div>
    );
};
