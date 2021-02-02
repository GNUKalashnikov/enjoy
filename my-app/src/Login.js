import React from "react";

const Login = (props) => {

    const{ email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;
     


    return (
        
        <section className="login">
            <div className="loginContainer">
            <img className="logo" src="images/Logo.png"></img>
                
                <label>Username</label>
                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg"></p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't Have an account ?<span onClick={() => setHasAccount(!hasAccount)} >Sign Up</span> </p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}> Sign Up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}> Sign In </span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Login;