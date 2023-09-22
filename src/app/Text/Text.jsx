import { Text3D, useMatcapTexture } from "@react-three/drei";
import { RigidBody} from "@react-three/rapier";
import { useEffect, useRef } from "react";

export default function Text() {
  const [matcap, url] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);

  const fontProps = {
    font: "/fonts/Oswald_Regular.json",
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

  useEffect(()=>{


  },[])

  return (
    <>
      <group position={[0, 0, 3.5]}>
        <RigidBody position={[-0.5, 0, 0]} rotation-y={0.2} ref={testRef}>
          <Text3D {...fontProps} onClick={pushIt}>
            T
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </RigidBody>

        <RigidBody position={[-0.3, 0, 0]} rotation-y={0.2}>
          <Text3D {...fontProps}>
            o
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </RigidBody>

        <RigidBody position={[-0.05, 0, 0]} rotation-y={-0.1}>
          <Text3D {...fontProps}>
            S
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </RigidBody>

        <RigidBody position={[0.25, 0, 0]} rotation-y={0}>
          <Text3D {...fontProps}>
            o
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </RigidBody>

        <RigidBody position={[0.2, 0.6, 0]} rotation={[0, 0, -0.3]} gravityScale={0.04}>
          <Text3D {...fontProps} size={0.1} bevelThickness={0.01}>
            CREATIVE DEV
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </RigidBody>
      </group>
    </>
  );
}
