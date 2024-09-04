import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiSharpSmile } from "react-icons/gi";


function Card() {

    const [heart, setHeart] = useState(false);

    const [count, setCount] = useState(0);

    const handleHeart = () => {
        if (!heart) {
            setHeart(true)
            setCount(count + 1)
        } 
        else {
            setHeart(false)
            setCount(count - 1)
        }

    }

    return (
        <div className="card">
            <span>Patiktukai: {count}</span>

            <div className="card-header" style={{display: "flex", justifyContent: "center", alignItems: "center", gap:30}}>
                <GiSharpSmile />
                <p style={{marginTop:15}}>Please like my dog</p>
            </div>
            <img src="https://assets3.thrillist.com/v1/image/3016449/792x758/flatten;scale;webp=auto;jpeg_quality=60.jpg" style={{width:280}} alt="dog" onDoubleClick={handleHeart} />

            <div className="card-footer">
                {heart ? <FaHeart style={{fontSize: 50, color: "red"}} onClick={handleHeart} /> : <FaHeart style={{fontSize: 50}} onClick={handleHeart} /> }
                
            </div>

        </div>
    )

}


export default Card;