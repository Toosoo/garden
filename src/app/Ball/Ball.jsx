import { KeyboardControls, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef } from "react";


export default function Ball() {
  const [glassMatCap] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);
  const [subscribeKeys ,getKeys] = useKeyboardControls()
  const ball = useRef()


  const jump = () =>{
        ball.current.applyImpulse({x:0,y:.5,z:0})
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

        const impulseStrength = .3 * delta
        const torqueStrength = .3 * delta

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
    restitution={.5} 
    friction={1} 
    ref={ball} 
    linearDamping={.5}
    angularDamping={.5}
    >
        <mesh scale={.3}>
            {/* <icosahedronGeometry args={[1,1]} />
            <meshStandardMaterial flatShading /> */}

            <sphereGeometry />
            <meshMatcapMaterial matcap={glassMatCap} />
        </mesh>
    </RigidBody>
   
)
}