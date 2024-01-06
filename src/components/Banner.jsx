import bannerImg from '../assets/images/banner.png'
import Container from './Container';
const Banner = () =>{
    return(
        <div className='bg-[#edf7fc]'>
            <Container>
            <div className='flex pt-10'>
                <div className='flex-1'>
                    <h1>Find And Search Your <br /><span>Suitable Doctors </span></h1>
                    <p>Join us and take care of yourself and your family with health services that will make you feel confident and safe in your daily life</p>
                    <div>
                        <button>Live chat</button>
                        <button>Get Appointment</button>
                    </div>
                </div>
                <div className='bg-banner-bg flex-1 rounded-full cover'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Banner;