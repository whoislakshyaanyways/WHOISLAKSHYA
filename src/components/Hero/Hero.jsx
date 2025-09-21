import './Hero.css'
import head from '../../assets/head.jpg'; 
import Garuda from '../../assets/Garuda.png'

function Hero(){
    return(
        <div>
            <div className="hero">

                <div className="hero-header">
                    <h1 className="name-front">Garuda</h1>
                </div>
                
                <div className="left">
                    <div className="Hero-pic">
                    <img src={Garuda} alt="Garuda" />
                    </div>
                    <div className="full-name">Virtual Campus</div>
                    <div className="dob">Ai Tutor</div>
                </div>
                <div className="right">
                    <div class="container">
                        <h1 className="content-heading-1">Hello,</h1>
                        <h1 className="content-heading-2">We are Garuda<span>!</span></h1>
                        <p className="content-content">We are currently working on a fully fleged 3D campus with 3D Classrooms and Ai tutors Integrated with Vr technology and physical ready to deploy Bots.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
