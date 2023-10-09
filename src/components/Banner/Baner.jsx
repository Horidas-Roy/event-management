import banerImg from "../../assets/banner1.jpg";

const Baner = () => {
  return (
    <div data-aos="flip-right"
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${banerImg})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div data-aos="flip-right" className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-satisfy text-[#dc35b8]">
            To Making Your Special Day Memorable
          </h1>
          <button className="btn btn-primary font-bold text-[#fff]">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Baner;
