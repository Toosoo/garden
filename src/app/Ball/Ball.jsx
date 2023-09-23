import { KeyboardControls, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";


export default function Ball() {
  const [matcap] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);
  const [subscribeKeys ,getKeys] = useKeyboardControls()
  const ball = useRef()


  useFrame((state,delta)=>{
        const {forward,backward,rightward,leftward} = getKeys()
    


        const impulse = {x:0,y:0,z:0}
        const torque = {x:0,y:0,z:0}

        const impulseStrength = 1 * delta
        const torqueStrength = 1 * delta

        if(forward)
        {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        ball.current.applyImpulse(impulse)
        ball.current.applyTorqueImpulse(torque)
  })

return(
   

    <RigidBody canSleep={false} restitution={.1} friction={2} ref={ball}>
        <mesh>
            <icosahedronGeometry args={[1,1]} />
            <meshStandardMaterial flatShading />
        </mesh>
    </RigidBody>
   
)
}