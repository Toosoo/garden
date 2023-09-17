import { Text3D } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import { useControls } from "leva";

export default function Text() {



    const { posX, posY, posZ, rayleigh, turbidity, mieDirectionalG, mieCoefficient, rayColor } = useControls({
        rayleigh: 0.5,
        turbidity: 10,
        mieDirectionalG: 0.8,
        mieCoefficient: 0.05,
        rayColor: "#fff",
        posX: -0.8,
        posY: 0.3,
        posZ: -0.5,
      });



//   return (
//     <Physics>
//       <RigidBody>
//         <Text3D font="/Climate Crisis.json">
//           Toso
//           <meshBasicMaterial color='gold'/>
//         </Text3D>
//       </RigidBody>
//       <RigidBody type="fixed">
//         <mesh receiveShadow position={[posX,-1.24,posZ]} >
//             <boxGeometry args={[1000,.5,1000]}/>
//             <meshStandardMaterial  />
//         </mesh>
//       </RigidBody>
//     </Physics>
//   );
}
 