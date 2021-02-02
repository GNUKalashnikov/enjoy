import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import "./App.css";



const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
//   This section will consist of rules of login
//   Need to establish it using email and password
//   Error handling auth, inv email, inv pass, usr not found,


    
  }
  const handleSignup = () => {
    //   This section will consist of rules of Sighnup
    //   Just like login but for sighnup procedure 
    
  };
    return (
        <div className="App">
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/>
        </div> 
    );
}
export default App;