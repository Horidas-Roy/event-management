

import { useLoaderData } from "react-router-dom";
import Baner from "../components/Banner/Baner.jsx";
import ServiceCard from "../components/services/ServiceCard.jsx";
import Footer from "../components/footer/Footer.jsx";
import aboutImg from "../../src/assets/about.jpg";
import {BiLocationPlus, BiSolidPhoneCall, BiTimeFive } from 'react-icons/bi';
import {AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  const services = useLoaderData();
  const handleContact=()=>{
       console.log("form click")
  }
  return (
    <div data-aos="flip-left">
      <div  data-aos="zoom-in-right">
      <Baner></Baner>
      </div>
      <div>
        <h2 className="text-center text-6xl font-bold my-20">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-4 gap-6">
          {
          services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold my-20">About Us</h2>
        <div>
          <img src={`${aboutImg}`} alt="" />
          <p className="px-6 text-center">
            Welcome to{" "}
            <span className="font-semibold">Wedding Arranger</span>, where
            dreams become memorable realities. With a passion for creating
            enchanting and unforgettable weddings, we are your trusted partner
            in turning your vision into a beautiful celebration of love.Our
            mission is simple yet profound: to transform your wedding dreams
            into a reality that exceeds your expectations. We believe that every
            couple deserves a wedding day that reflects their love story, style,
            and personality. Our goal is to alleviate the stress of planning and
            coordinating your wedding so that you can focus on the joy of the
            journey.Your happiness is our top priority. We are committed to
            transparency, integrity, and open communication throughout the
            entire wedding planning process. Our team will work tirelessly to
            create an atmosphere of trust and collaboration, ensuring that your
            wedding is a joyful, stress-free experience.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold mt-10 mb-5">Contact Us</h2>
        <div   className="flex flex-col md:flex-row justify-evenly mb-10">
        <div data-aos="zoom-in-right" className="flex-1 justify-center flex ">
        <div className="space-y-5 ">
        <div className="flex justify-start gap-4 text-xl items-center">
        <BiLocationPlus className="text-5xl"></BiLocationPlus>
        <div>
          <h2>Our Office Address</h2>
          <p>HSTU,Dinajpur,Rangpur,<br></br> Dhaka,Banglades</p>
        </div>
        </div>
        <div className="flex justify-start gap-4 text-xl items-center">
        <AiOutlineMail  className="text-5xl"></AiOutlineMail>
        <div>
          <h2>General Enquiries</h2>
          <p><a href="">abc@gmail.com</a></p>
        </div>
        </div>
        <div className="flex justify-start gap-4 text-xl items-center">
        <BiSolidPhoneCall  className="text-5xl"></BiSolidPhoneCall>
        <div>
          <h2>Call Us</h2>
          <p>+880 175873...</p>
        </div>
        </div>
        <div className="flex justify-start gap-4 text-xl items-center">
        <BiTimeFive  className="text-5xl"></BiTimeFive>
        <div>
          <h2>Our Timing</h2>
          <p>Mon-Sun 10am to - 7pm</p>
        </div>
        </div>
        </div>
        </div>
          <div data-aos="zoom-in-left" className="flex-1 justify-center">

             <form onSubmit={handleContact} className="space-y-5 p-10">
              <input type="text" placeholder="Your Name" className="block text-[#101632c2] w-full border-2 px-4 py-2 rounded-lg"/>
              <input type="email" placeholder="Your Email" className="block text-[#101632c2] w-full border-2 px-4 py-2 rounded-lg"/>
              <input type="text" placeholder="Contact Info" className="block text-[#101632c2] w-full border-2 px-4 py-2 rounded-lg"/>
              <input type="textarea" placeholder="Write Your message here" className="block text-[#101632c2] w-full border-2  rounded-lg px-4 pt-4 pb-10"/>
              <h1 className=" w-full text-center"><input type="submit" value="Submit" className="text-[#FFF] bg-[#101632c2] px-10 py-2 rounded-lg"/></h1>
             </form>

          </div>
        </div>
        <div>
          {/* map */}
        <div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe h-[500px]"
                width="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=hstu,dinajpur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
