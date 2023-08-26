/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 
const TeamCard = ({data}) => {
    const {name, university, image, title} = data; 
    return ( 
            <div className=" flex flex-col items-center py-3">
                <img src={image} alt="" className="h-20 w-20 rounded-full" />
            <h3>{name}</h3>
            <h3>{university}</h3>
            {/* <h3>{title}</h3> */}
            </div>
        
    );
};

export default TeamCard;