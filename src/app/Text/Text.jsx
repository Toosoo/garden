import { Text3D, useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

export default function Text() {
  const [glassMatCap, url] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);

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

  return (
    <group position={[0, 0, 3.8]}>
      <RigidBody position={[-0.5, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          T
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[-0.3, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          o
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[-0.05, 0, 0]} rotation-y={-0.1}>
        <Text3D {...fontProps}>
          S
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[0.25, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          o
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[0.2, 0.6, .05]} rotation={[0, 0, -0.3]} gravityScale={0.04}>
        <Text3D {...fontProps} size={0.1} bevelThickness={0.01}>
          CREATIVE DEV
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>
      <RigidBody position={[-0.4, 0.5, .02]} rotation={[0, 0, 0]} gravityScale={0.01}>
        <Text3D {...fontProps} size={0.07} bevelThickness={0.01}>
          FREELANCE
          <meshMatcapMaterial matcap={glassMatCap} />
        </Text3D>
      </RigidBody>
    </group>
  );
}
