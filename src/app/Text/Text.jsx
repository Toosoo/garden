import { Text3D, useMatcapTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

export default function Text() {
  const [glassMatCap, url] = useMatcapTexture("2E763A_78A0B7_B3D1CF_14F209", 64);
  const [basicMatcap] = useMatcapTexture("5ECBA4_BCFAE7_92EED0_A1F4DC", 64);

  const fontProps = {
    font: "/fonts/SC-font.json",
    bevelEnabled: true,
    bevelSize: 0,
    bevelThickness: 0.03,
    curveSegments: 10,
    bevelOffset: 0,
    bevelSegments: 1,
    height: 0.01,
    letterSpacing: 0.01,
    size: 0.5,
  };

  return (
    <group position={[0, 0, 3.8]}>
       <RigidBody position={[-0.6, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          C
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[-0.5, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          R
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[-0.4, 0, 0]} rotation-y={-0.1}>
        <Text3D {...fontProps}>
          e
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

      <RigidBody position={[-0.3, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          a
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 

      <RigidBody position={[-0.2, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          T
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 

      <RigidBody position={[0.1, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          i
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 
      <RigidBody position={[0.2, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          V
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 
      <RigidBody position={[0.3, 0, 0]} rotation-y={0}>
        <Text3D {...fontProps}>
          e
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 




     

      <RigidBody position={[0.2, 0.6, .05]} rotation={[0, 0, -0.3]} gravityScale={0.04}>
        <Text3D {...fontProps} size={0.4} bevelThickness={0.03}>
          Dev
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody> 

     

    </group>
  );
}
