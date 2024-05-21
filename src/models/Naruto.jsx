import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import scene from "../assets/3d/naruto_rigged_hatchxr.glb";
const Naruto = ({ currentAnimation, animationSpeed = 0.8, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // console.log({ actions });
    Object.values(actions).forEach((action) => {
      action.stop();
      action.timeScale = animationSpeed;
    });

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="fbx_mergefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.C__Users_JK_Desktop_NARUTO_ULTI}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.C__Users_JK_Desktop_NARUTO_ULTI0}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Bandage_Naruto_obj" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Naruto;
