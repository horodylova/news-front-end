import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [commentsList, setCommentsList] = useState([]);


  return (
    <AppContext.Provider value={{ user, setUser, setLoading, error, loading, setError, isLogin, setIsLogin, commentsList, setCommentsList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };


