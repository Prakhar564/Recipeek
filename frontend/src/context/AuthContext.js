import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const swal = require('sweetalert2');

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("Firebase user ", firebaseUser);
                setUser(firebaseUser);
            } else {
                setUser(null); // User is signed out
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logoutUser = () => {
        auth.signOut().then(() => {
            history.push("/login");
            swal.fire({
                title: "You have been logged out...",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        });
    };

    const contextData = {
        user,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
