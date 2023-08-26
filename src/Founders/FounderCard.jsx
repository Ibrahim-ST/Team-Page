import { FaCircleChevronRight } from "react-icons/fa6";
const FounderCard = ({data}) => {
  console.log(data)
  const {name, image, title} = data;
  return (
    <div>
      <div className="card h-100 bg-base-100 shadow-2xl rounded-[50px]">
        <figure className="px-10 pt-10 ">
          <img
            src={image} 
            className="rounded-full h-52 w-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{title}</p>   
          <button className="btn btn-outline text-[#6C24B0] rounded-full border-t-2 border-l-2 ">Message him now<FaCircleChevronRight size={23} /> </button>        
        </div>
      </div>
    </div>
  );
};

export default FounderCard;


