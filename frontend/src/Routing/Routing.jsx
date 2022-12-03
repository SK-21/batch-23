import React from 'react'
import { useParams, useSearchParams } from "react-router-dom"

function Routing() {
    const params = useParams();

    const [URLSearchParams,setURLSearchParams] = useSearchParams();
    
    return (
        <>
            <div>Routing</div>
            <h1>route params - {JSON.stringify(params)}</h1>
            <h1>search params - {URLSearchParams.get("search")} {URLSearchParams.get("capacity")}</h1>
            <input type="search" placeholder='Enter search query' onChange={e=>setURLSearchParams({'search':e.target.value,"capacity":"128gb"})} />
        </>
    )
}

export default Routing