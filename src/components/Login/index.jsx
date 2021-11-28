import React from "react";

const Login = () => {
    const user = {
        'userid': 'id',
        'userpwd': 'password'
    };
    return (
        <div className="container">
            {user.userid}
        </div>
    );
}

export default Login;