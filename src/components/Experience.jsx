import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  useScroll,
} from "@react-three/drei";
import { render, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Wave");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      if(section==0){
      setCharacterAnimation("Wave");
      }
      if(section==1 ){
        setCharacterAnimation("Standing");
      }
      if(section==2){
        setCharacterAnimation("Point");
      }
      if(section==3){
        setCharacterAnimation("Sit");
      }
    }, 800);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation-y={0}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        renderOrder={1}
        
        variants={{
          0: {
            
            scaleX: isMobile ? 1.5 : 5,
            scaleY: isMobile ? 1.5 : 5,
            scaleZ: isMobile ? 1.5 : 5,
            
          },
          1: {
            y: -viewport.height + 0,
            x: isMobile ? 0.3 : 0,
            z:7,
            rotateX: 0,
            rotateY: isMobile ? 0 : 0,
            rotateZ: 0,
            scaleX: isMobile ? 0.7 : 1.4,
            scaleY: isMobile ? 0.7 : 1.4,
            scaleZ: isMobile ? 0.7 : 1.4,
          },
          2: {
            x: isMobile ? 0 : -1.8,
            y: isMobile ? -viewport.height * 2 -1 :-viewport.height * 2 - 0.1,
            z:isMobile ? 3 : 2 ,
            rotateX: 0,
            rotateY: Math.PI / 2,
            scaleX: isMobile ?0.7: 0.9,
            scaleY: isMobile ?0.7: 0.9,
            scaleZ: isMobile ?0.7: 0.9,

          },
          3: {
            y:isMobile ? -viewport.height * 3+2.24 :-viewport.height * 3 + 1,
            x: isMobile ? 0.1 :0.6,
            z:isMobile ?7.1 :8.25,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI/8 :-Math.PI / 4,
            rotateZ: 0,
            scaleX: isMobile ? 0.7 :1.2,
            scaleY: isMobile ? 0.7 :1.2,
            scaleZ: isMobile ? 0.7 :1.2,
          },
        }}
      >
        
      <Avatar animation={characterAnimation} />
      
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 4 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={isMobile ?[0, 0, 0]:[-1.7, -7.25, 0.57]}
          rotation={[-Math.PI, 2.42, -Math.PI]}
        ></group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[
          0,
          isMobile ? -viewport.height : -1.5 * officeScaleRatio,
          -10,
        ]}
        animate={{
          z: section === 1 ? 0 : -10,
          y:
            section === 1
              ? -viewport.height
              : isMobile
              ? -viewport.height
              : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />

      </motion.group>
      <Projects />
    </>
  );
};
