import {  Cylinder, useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


export function Grass() {
 
  const texture = useTexture({
    map:'/leaves/leaves_forest_ground_diff_1k.jpg',
    displacementMap:'/leaves/leaves_forest_ground_disp_1k.jpg',
    aoMap:'/leaves/leaves_forest_ground_arm_1k.jpg',
    roughnessMap:'/leaves/leaves_forest_ground_arm_1k.jpg',
    metalnessMap:'/leaves/leaves_forest_ground_arm_1k.jpg',
    
  })

return (
 
      <RigidBody type="fixed" colliders='trimesh'>

        <mesh rotation={[-Math.PI*.5,0,0]}>
          <planeGeometry args={[10,10]}/>
          <meshStandardMaterial {...texture} />
        </mesh>



      



      </RigidBody> 
       

   
  );
}


