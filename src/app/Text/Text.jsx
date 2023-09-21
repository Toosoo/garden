import { Float, Text3D } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";

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
  const testRef = useRef();
  const pushIt = () => {
    console.log(testRef.current);
    testRef.current.applyImpulse({ x: 0, y: 0.1, z: -0.05 });
  };

  return (
    <>
      <group position={[0, 0, 3.5]}>
       

        <RigidBody position={[-0.5, 0, 0]} rotation-y={0.2} ref={testRef}>
          <Text3D {...fontProps} onClick={pushIt}>
            T
            <meshNormalMaterial/>
          </Text3D>
        </RigidBody>
        

        <RigidBody position={[-0.3, 0, 0]} rotation-y={0.2}>
          <Text3D {...fontProps} receiveShadow>
            o
            <meshNormalMaterial/>
          </Text3D>
        </RigidBody>

        <RigidBody position={[-0.05, 0, 0]} rotation-y={-0.1}>
          <Text3D {...fontProps} receiveShadow>
            S
            <meshNormalMaterial/>
          </Text3D>
        </RigidBody>

        <RigidBody position={[0.25, 0, 0]} rotation-y={0}>
          <Text3D {...fontProps}>
            o
            <meshNormalMaterial color={rayColor} />
          </Text3D>
        </RigidBody>

        <RigidBody position={[0.2, 0.6, 0]} rotation={[0, 0, -0.3]} gravityScale={0.04}>
          <Text3D {...fontProps} size={0.1} bevelThickness={0.01} receiveShadow>
            CREATIVE DEV
            <meshBasicMaterial color="#ffd" />
          </Text3D>
        </RigidBody>

      </group>
    </>
  );
}
