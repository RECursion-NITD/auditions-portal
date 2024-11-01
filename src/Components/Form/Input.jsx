import React from "react";
import {motion} from 'framer-motion'

const Input = ({ setState, type, value }) => {
  return (
    <motion.div layout className="flex w-full justify-start">
      <input
        className="h-[6vh] min-h-[50px] w-11/12 fomt-bold font-head bg-black text-xl pl-6 text-white bg-inputBackground border-b-2 border-outline focus:outline-none focus:border-primary"
        type={type}
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </motion.div>
  );
};

export default Input;
