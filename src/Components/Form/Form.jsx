import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Stepper from './Stepper/Stepper'
import Buttons from './Buttons'
import Basic from './Stepper/Elements/Basic'
import Contacts from './Stepper/Elements/Contacts'
import Links from './Stepper/Elements/Links'
import Domains from './Stepper/Elements/Domains'
import {motion} from 'framer-motion'
import DomainInfo from './Stepper/Elements/DomainInfo'
import { ref, set } from 'firebase/database'
import { realTimeDB } from '../../db/firebase'
import Loader from '../Load/Loader'
import ShowQr from './Stepper/Elements/ShowQr'
import { animationTwo, transition } from '../../Animations'
import Alert from '../Alert/Alert'
import backgroungImg from '../../Assets/pageBackground.webp'
import mobilepng from '../../Assets/mobile bg.webp'

const Form = () => {

  const [active, setActive] = useState(0)
  const [name, setName] = useState("")
  const [roll, setRoll] = useState("")
  const [branch, setBranch] = useState("")
  const [pmail, setPmail] = useState("");
  const [imail, setImail] = useState("");
  const [phone, setPhone] = useState("");
  const [cc, setCC] = useState("");
  const [cf, setCF] = useState("");
  const [appliedFor, setAppliedFor ] = useState([])
  const [slidervalue,setSlidervalue] = useState([1,1,1,1])
  const [git, setGit] = useState("")
  const [exp, setExp] = useState("")
  const [stack, setStack] = useState("")
  const [drive, setDrive] = useState("")
  // const [isValid, setIsValid] = useState(true)
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = useState("")
  const [soft, setSoft] = useState("")

  const [isValidname, setIsValidname] = useState(true);
  const [isValidroll, setIsValidroll] = useState(true);
  const [isValidbranch, setIsValidbranch] = useState(true);
  const [isValidpmail, setIsValidpmail] = useState(true);
  const [isValidimail, setIsValidimail] = useState(true);
  const [isValidphone, setIsValidphone] = useState(true);
  const [isValidcc, setIsValidcc] = useState(true);
  const [isValidcf, setIsValidcf] = useState(true);
  const [isValidcheck, setIsValidcheck] = useState(true);
  const [isValidrank, setIsValidrank] = useState(true);
  const [isValidgit, setIsValidgit] = useState(true);
  const [isValidstack, setIsValidstack] = useState(true);
  const [isValidcontri, setIsValidcontri] = useState(true);
  const [isValiddrive, setIsValiddrive] = useState(true);
  const [showAlert, setShowAlert] = useState(false)

  function submitHandler(){
    setLoading(true);
    // console.log(appliedFor);
    // console.log(slidervalue);
    // console.log(name);
    set(ref(realTimeDB, "candidates/1"+phone), {
      name:name,
      roll:roll,
      branch:branch,
      pmail:pmail,
      imail:imail,
      phone:phone,
      cc:cc,
      cf:cf,
      links:links,
      appliedFor:appliedFor,
      slidervalue:slidervalue,
      github:git,
      drive:drive,
      // currRound:[0,0,0],
      rounds:{
        'Web Development':{currRound:0,promotedBy:""},
        'Teaching and Problem Setting':{currRound:0,promotedBy:""},
        'Graphics Design':{currRound:0,promotedBy:""}
      },
      exp:exp,
      stack:stack,
      soft:soft,
      PenPaperMarks:{
        'Design':0,
        'Teaching and PS':0,
        'Web Development':0,
      }
    }).then(()=>{
      setLoading(false);
      setActive(5);
      // console.log("Candidate Added");
    }).catch((error)=>{
      // console.log(error);
    });
  }

  const roles = ['Teaching','Problem Setting','Web/App Development','Graphics Design']
  const steps = [{
        label:"Basic Info",
        component:<Basic setName={setName} name={name} setRoll={setRoll} roll={roll} setBranch={setBranch} branch={branch} isValidname={isValidname} isValidroll={isValidroll} isValidbranch={isValidbranch} />
    },{
        label:"Contacts",
        component:<Contacts setImail={setImail} imail={imail} setPmail={setPmail} pmail={pmail} setPhone={setPhone} phone={phone} isValidpmail={isValidpmail} isValidimail={isValidimail} isValidphone={isValidphone}/>
    },{
        label:"Links",
        component:<Links setCC={setCC} setCF={setCF} cc={cc} cf={cf} setLinks={setLinks} links={links} isValidcc={isValidcc} isValidcf={isValidcf}/>
    },{
        label:"Domain",
        component:<Domains roles={roles} setAppliedFor={setAppliedFor} appliedFor={appliedFor} slidervalue={slidervalue} setSlidervalue={setSlidervalue} isValidcheck={isValidcheck} isValidrank={isValidrank} />
    },{
        label:"Domain Info",
        component:<DomainInfo setGit={setGit} git={git} drive={drive} setDrive={setDrive} appliedFor={appliedFor} stack={stack} setStack={setStack} exp={exp} setExp={setExp} soft={soft} setSoft={setSoft} isValidgit={isValidgit} isValidstack={isValidstack} isValidcontri={isValidcontri} isValiddrive={isValiddrive}/>
    },{
        label:"Final Steps",
        component:<ShowQr />
    }]

    const [mobview, setMobview] = useState(false)
    const variants = {
        closed: { height: "0px", overflow: "hidden", display:'flex !important' },
        open: {  display:'flex !important'},
    }

  return (loading)? <Loader /> : (
    <motion.div className='w-screen flex h-screen flex-col items-center pb-12 overflow-x-hidden'>
      <div className='hidden sm:flex'>
      <img src={backgroungImg} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0 hidden sm:flex" />
      </div>
      <motion.div className='flex sm:hidden w-full h-screen flex-col items-center pb-12 overflow-x-hidden'
      animate={(!mobview)? "open" : "closed"}
      variants={variants}
      >
        <img src={mobilepng} alt="background" className="fixed top-0 left-0 w-screen h-screen object-cover z-0" />
      </motion.div>
      <Navbar navbarBg={'#151632'}/>
      {showAlert && <Alert setShowAlert = {setShowAlert} message={"Error While Submitting The From"} />}
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animationTwo}
        transition={transition}
        className='pt-[20vh] w-11/12 lg:w-8/12 lg:min-w-[1000px] h-fit min-h-screen flex justify-center lg:justify-start overflow-hidden z-10'>
          <Stepper steps={steps} active={active}/>
          <motion.div layout className='w-full overflow-x-hidden'>
            {steps[active].component}
            {(active!==steps.length-1) && <Buttons active={active} setActive={setActive} size={steps.length} submitHandler={submitHandler} name={name} roll={roll} branch={branch} pmail={pmail} imail={imail} phone={phone} cc={cc} cf={cf} appliedFor={appliedFor} slidervalue={slidervalue} roles={roles} git={git} stack={stack} exp={exp} drive={drive} setIsValidname={setIsValidname} setIsValidroll={setIsValidroll} setIsValidbranch={setIsValidbranch} setIsValidpmail={setIsValidpmail} setIsValidimail={setIsValidimail} setIsValidphone={setIsValidphone} setIsValidcc={setIsValidcc} setIsValidcf={setIsValidcf} setIsValidcheck={setIsValidcheck} setIsValidrank={setIsValidrank} setIsValidgit={setIsValidgit} setIsValidstack={setIsValidstack} setIsValidcontri={setIsValidcontri} setIsValiddrive={setIsValiddrive} />}
          </motion.div>
      </motion.div>
    </motion.div>
  ) 
}

export default Form