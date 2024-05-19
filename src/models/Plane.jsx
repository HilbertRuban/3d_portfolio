import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import planeScene from "../assets/3d/son_goku_and_kintoun_nimbus.glb";
const Plane = ({ isRotating, ...props }) => {
  const { scene } = useGLTF(planeScene);
  const planeRef = useRef();

  useFrame((state) => {
    if (planeRef.current) {
      planeRef.current.position.y =
        Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={planeRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};
export default Plane;
