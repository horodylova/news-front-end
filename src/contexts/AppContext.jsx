import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'tickle122',
    name: "Tom Tickle",
    avatar_url: 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, setLoading, error, loading, setError, isLogin, setIsLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };


