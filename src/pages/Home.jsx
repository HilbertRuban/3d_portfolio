import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from '../models/Island'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let islandScale = null;
    let islandPosition = [0, -6.5, -43];
    let rotation = [.1, 4.7, 0];
    
    islandScale = window.innerWidth < 768 ? [.9, .9, .9] : [1,1,1];

    return [islandScale, islandPosition, rotation];
  }

  const [IslandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={.5}/>
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
          <Island 
            position={islandPosition}
            scale={IslandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
export default Home;
