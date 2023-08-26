import { useEffect, useState } from "react";


const Scholars = () => {
    const [uniData, setUniData] = useState();
     useEffect(() => {
        fetch('UniList.json')
        .then(res => res.json())
        .then(data => setUniData(data));
     }, []) 
     console.log(uniData);
    return (
        <>
        <p className="text-center my-4">Learn from Scientists, research scholars from the top institutes in the World</p>
        <div className="grid grid-cols-4 gap-2 my-4">
            {uniData &&            
            uniData.map(data => {
                return <> 
                    <p className="p-5 border border-2 border-[#3742B0] rounded-md text-center transform hover:scale-105 transition-all duration-500 hover:text-[#6C24B0]">{data.name}</p>
                
                </>
            })
        }
        <span className='text-[#3742B0] text-3xl font-bold text-center mt-5 -ml-14 '>....and so on </span>
        </div>
        </>
    );
};

export default Scholars;