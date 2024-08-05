import React, { useContext } from 'react';
import { UserContext } from '../../contexts/User';

function Header() {
    const user = useContext(UserContext);

    return (
        <div>
            <p>Welcome, {user.username}</p>
        </div>
    );
}

export default Header;
