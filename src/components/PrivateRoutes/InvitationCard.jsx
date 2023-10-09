import img9 from '../../assets/9.jpeg'
import img10 from '../../assets/10.jpeg'
import img11 from '../../assets/11.jpeg'
import img12 from '../../assets/12.jpeg'
import img13 from '../../assets/13.jpeg'
import img14 from '../../assets/14.jpeg'
import img15 from '../../assets/15.png'
import img16 from '../../assets/16.jpeg'

const InvitationCard = () => {
    return (

        <div>
            <h2 className='text-center text-3xl font-bold my-10'>We Also Provide Invitation Cards In Reasonable Prize</h2>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <img className='w-full h-[350px]' src={img9} alt="" />
            <img className='w-full h-[350px]' src={img10} alt="" />
            <img className='w-full h-[350px]' src={img11} alt="" />
            <img className='w-full h-[350px]' src={img12} alt="" />
            <img className='w-full h-[350px]' src={img13} alt="" />
            <img className='w-full h-[350px]' src={img14} alt="" />
            <img className='w-full h-[350px]' src={img15} alt="" />
            <img className='w-full h-[350px]' src={img16} alt="" />
        </div>
        </div>
    );
};

export default InvitationCard;