import React, { useState } from "react";
import {motion} from 'framer-motion';
import Navbar from "../Navbar/Navbar";
import TimeLine from "./TimeLine";
import backgroungImg from '../../Assets/pageBackground.png'
import mobilepng from '../../Assets/mobile bg.png'

const About = () => {
    const [mobview, setMobview] = useState(false)
    const variants = {
        closed: { height: "0px", overflow: "hidden", display:'flex !important' },
        open: {  display:'flex !important'},
    }

    return (
        <motion.div layout className='w-screen h-fit flex flex-col justify-center z-50'>
            <div className='hidden sm:flex'>
                <img src={backgroungImg} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0 hidden sm:flex" />
            </div>
            <motion.div className='flex sm:hidden w-full h-fit flex-col justify-center z-50'
            animate={(!mobview)? "open" : "closed"}
            variants={variants}
            >
                <img src={mobilepng} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0" />
                <div>
                    <Navbar/>
                    <TimeLine/>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;