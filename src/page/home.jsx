import React ,{useState} from 'react';
import '../css/toggle_design.css';
import Switch from './switch';

function Home (){
    const [check,setCheck] = useState(true);
    const handleClick=()=>{
        setCheck(!check);
    };
    return(
        <>
        <div className={check ?"dark-mode" : 'light-mode'}>
            <input type="checkbox" className="checkbox" id="checkbox"/>   
            <Switch onClick={handleClick} />
        </div>
        </>
    );
}
export default Home;