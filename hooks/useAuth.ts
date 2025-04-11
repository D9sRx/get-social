import { secureGet } from "@/utils/storage";
import { useEffect, useState } from "react";


export function useAuth() {

    const [token,setToken] = useState("");

    const [isLoading,setLoading] = useState(true);

    useEffect(() => {

    const fetchToken = async () => {
        const token = await secureGet("token");
        setToken(token || "");
        setLoading(false);
    };
    fetchToken();
    }, []);

    return {token,isLoggedIn: !!token,isLoading};
}