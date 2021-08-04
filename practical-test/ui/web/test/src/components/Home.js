import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

// Importing the Login & Register Componet
import Login from './Login'

import View from './View'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else {
        return <View/>;
    }
    
}

export default Home;