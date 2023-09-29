import { KeyboardControls, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef } from "react";


export default function Ball() {
    const [basicMatcap] = useMatcapTexture("5ECBA4_BCFAE7_92EED0_A1F4DC", 64);
  const [subscribeKeys ,getKeys] = useKeyboardControls()
  const ball = useRef()
  const jump = () =>{
        ball.current.applyImpulse({x:0,y:.1,z:0})
  }
  useEffect(()=>{
    subscribeKeys(
        (state)=>state.jump,
        (value)=>{
          value ? jump() : null
        }
    )
  },[])

  useFrame((state,delta)=>{
        const {forward,backward,rightward,leftward,jump} = getKeys()

        const impulse = {x:0,y:0,z:0}
        const torque = {x:0,y:0,z:0}

        const impulseStrength = .03 * delta
        const torqueStrength = .03 * delta

        if(forward)
        {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }
        if(rightward)
        {
            impulse.x += impulseStrength
            torque.z -= torqueStrength
        }
        if(backward)
        {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }
        if(leftward)
        {
            impulse.x -= impulseStrength
            torque.z += torqueStrength
        }
       

        ball.current.applyImpulse(impulse)
        ball.current.applyTorqueImpulse(torque)
  })


return(
   

    <RigidBody 
    colliders='ball' 
    canSleep={false} 
    restitution={.9} 
    friction={1} 
    ref={ball} 
    linearDamping={.5}
    angularDamping={.5}
    >
        <mesh scale={.2}>
            <sphereGeometry />
            <meshMatcapMaterial matcap={basicMatcap} />
        </mesh>
    </RigidBody>
   
)
}