import { FaCircleChevronRight } from "react-icons/fa6";
const FounderCard = ({data}) => {
  console.log(data)
  const {name, image, title} = data;
  return (
    <div>
      <div className="card h-100 bg-base-100 shadow-2xl rounded-[50px]">
        <figure className="mx-10 pt-2 mt-2 bg">
          <img
            src={image} 
            className="rounded-full h-52 w-52 custom-border-radius
            transform hover:scale-110 duration-500 transition-transform
            "
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


