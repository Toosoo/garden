import { Center, Float, Text3D } from "@react-three/drei";
import { RigidBody, Physics, CuboidCollider, TrimeshCollider } from "@react-three/rapier";
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
  
  const fontProps = {
    font: "/src/assets/fonts/Oswald_Regular.json",
    bevelEnabled: true,
    bevelSize: 0,
    bevelThickness: 0.05,
    curveSegments: 10,
    bevelOffset: 0,
    bevelSegments: 1,
    height: 0.01,
    letterSpacing: 0.01,
    size: 0.5,
  };

  return (
    <>
      <group position={[0, 0, 3.5]}>
        <RigidBody position={[-.5, 0, 0]} rotation-y={.2}  >
          <Text3D {...fontProps}>
            T
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[-.3, 0, 0]} rotation-y={0.2} >
          <Text3D {...fontProps}>
            o
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[-.05, 0, 0]} rotation-y={-0.1} >
          <Text3D {...fontProps}>
            S
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[.25, 0, 0]} rotation-y={0} >
          <Text3D {...fontProps}>
            o
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>

        <RigidBody position={[.2,.6,0]} rotation={[0,0,-0.3]} gravityScale={.04}>
          <Text3D {...fontProps} size={0.1} bevelThickness={0.01}>
            CREATIVE DEV
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>
      </group>

    

      
    
    
    </>
  );
}
