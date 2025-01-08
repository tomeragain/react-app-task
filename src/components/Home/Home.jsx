import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}