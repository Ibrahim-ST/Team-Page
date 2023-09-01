/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import FounderCard from "./FounderCard"; 

const Founders = () => {
    const [founderData, setFounderData] = useState();
     useEffect(() => {
        fetch('Founders.json')
        .then(res => res.json())
        .then(data => setFounderData(data));
     }, [])  
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-8"> 
            {founderData &&
                founderData.map((data, i) => <FounderCard key={i} data={data}/>)
            }
        </div>
    );
};

export default Founders;