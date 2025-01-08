import { createContext, useState, useContext } from "react";
import ApiAccess from "../Services/ApiService";

// Create Auth Context
const AuthContext = createContext();

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await ApiAccess.post("/user/login", { email, password });
            setUser(response.data.data.user);
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || "Login failed";
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};