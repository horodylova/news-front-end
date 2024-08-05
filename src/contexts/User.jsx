import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState({
        username: 'Guest',
        name: "Svitlana Horodylova",
        avatar_url: 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729'
    });

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };

