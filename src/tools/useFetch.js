import { useEffect, useState } from "react";

export function useFetch(url){
    const [datos, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((datos) => setData(datos))
            .finally(() => setLoading(false));
    },[]);

    return { datos, loading };
}