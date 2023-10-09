import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { useParams } from "react-router-dom";


const ServiceCardDetails = () => {
  
  const [service,setService]=useState()

  const {services}=useContext(AuthContext);
  const {id}=useParams();
  
  useEffect(()=>{
    const findDetails=services.find(service=>service.id == id);
    setService(findDetails);
  },[id,services])

  


  return (
    <div className="card bg-base-100 shadow-xl">
  <figure><img src={service?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{service?.title}</h2>
    <p className="text-xl">{service?.description}</p>
    <div className="card-actions justify-center ">
      <span className="btn btn-primary w-1/2 text-2xl">Total Cost For This Service is:{service?.prize}$</span>
    </div>
  </div>
</div>
  );
};

export default ServiceCardDetails;