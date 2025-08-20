import './Hero.css'
import head from '../../assets/head.jpg'; 

function Hero(){
    return(
        <div>
            <div className="hero">

                <div className="hero-header">
                    <h1 className="name-front">WHOISLAKSHYA</h1>
                </div>
                
                <div className="left">
                    <div className="Hero-pic">
                    <img src={head} alt="Hero" />
                    </div>
                    <div className="full-name">Lakshya Sharma</div>
                    <div className="dob">9th Oct 2006</div>
                </div>
                <div className="right">
                    <div class="container">
                        <h1 className="content-heading-1">Hello, I'm</h1>
                        <h1 className="content-heading-2">Lakshya<span>!</span></h1>
                        <p className="content-content">I am a self-taught Video Editor, Web Developer and what not! With extensive marketing and communication experience. I am currently living in Chandigarh and pursuing a degree in Computer Science fom Chandigarh University.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
