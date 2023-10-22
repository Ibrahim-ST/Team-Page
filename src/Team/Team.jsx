import   { useEffect, useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import Founders from '../Founders/Founders'; 
import Scholars from '../Scholars/Scholars';

const Team = () => {
    const [teamData, setTeamData] = useState();
     useEffect(() => {
        fetch('Team.json')
        .then(res => res.json())
        .then(data => setTeamData(data));
     }, [])   

     console.log(teamData);
    return (
        <div>
            <div className='max-w-5xl mx-auto my-5 font-poppins'>
                <h2 className='text-[#6C24B0] text-5xl font-bold text-center'>Our Teams</h2>
                <h3 className='text-[#3742B0] text-2xl font-bold text-center mb-10'>Fully dedicated for future scientist</h3> 
                <Scholars />
                
                <h2 className='text-[#6C24B0] text-5xl font-bold text-center my-10'>Meet Your Mentors</h2>
                <Founders />

                <h2 className='text-[#6C24B0] text-3xl text-center mt-10 font-thin'>Our</h2>                
                <h2 className='text-[#6C24B0] text-3xl font-bold text-center mb-5'>Awesome Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            { teamData &&
                teamData.map((data, i) => <TeamCard key={i} data={data}/>)
            }
            </div>
            </div>
        </div>
    );
};

export default Team;