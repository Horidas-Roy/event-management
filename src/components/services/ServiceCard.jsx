/* eslint-disable react/prop-types */

const ServiceCard = ({service}) => {
    const {id,title,description,img}=service
    return (
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative overflow-hidden rounded-xl rounded-b-none bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={`${img}`}
      className="w-full h-52"
    />
  </div>
  <div className="p-3 flex flex-col h-[240px]">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased flex-1">
      {
       description.slice(0,100)
      }...
    </p>
    <div>
    <button
      className="select-none rounded-lg text-lg bg-pink-500 w-full py-3 px-6 text-center align-middle  font-bold uppercase text-[#121328] shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Details
    </button>
  </div>
  </div>
  
</div>
    );
};

export default ServiceCard;