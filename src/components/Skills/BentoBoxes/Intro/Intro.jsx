import './intro.css';
import spriteSheet from '../../../../assets/spriteSheet.png';


function Intro(){
    return(
        <div className="skill1Box">
            <h1 className="skillHeading">
                CREATION IS MY FUEL™
            </h1>

            <p className="skillPara">
                Currently in my 2nd year of Computer Science at Chandigarh University. Front-end web dev by day, freelance video editor by night. Filmmaking, cinematography, and creating anything and everything? That’s my jam.
            </p>

            <div className="spriteSheet">
            <div className="frames">
                <img src={spriteSheet} alt="Sprite Sheet" />
            </div>
            </div>
        </div>
    )
}


export default Intro;