import { Navigate, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
  
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }
  const navigate =useNavigate()
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={` z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3  w-12 h-12  rounded-full  ${menuOpened ?"bg-white":"bg-black"}`}
      >
        <div
          className={` h-0.5 rounded w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5 bg-black" : "bg-white"
          }`}
        />
        <div
          className={` h-0.5 rounded w-full my-1 ${
            menuOpened ? "hidden bg-black" : "bg-white"
          }`}
        />
        <div
          className={` h-0.5 rounded w-full transition-all ${
            menuOpened ? "-rotate-45 bg-black" : "bg-white"
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 backdrop-blur-sm  transition-all overflow-hidden flex flex-col navmenu
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      variants={curve}
      >
        <motion.div className="flex-1 flex text-white items-start justify-center flex-col gap-6 p-8 ">
          <MenuButton label="Home" onClick={() => onSectionChange(0)||navigate('/')} />
          <MenuButton label="About" onClick={() => navigate('/about')} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)||navigate('/')} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)||navigate('/')} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)||navigate('/')} />
        </motion.div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
