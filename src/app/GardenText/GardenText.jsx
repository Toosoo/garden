import { Text3D, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


export default function GardenText() {
  const basicMatcap = useTexture("/basic.png");

  const fontProps = {
    font: "/fonts/PR.json",
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
    <group scale={0.8}>
         <RigidBody position={[-1.2, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          
          G
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

    
     <RigidBody position={[-0.7, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          
          A
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>
      <RigidBody position={[-0.3, 0, 0]} rotation-y={-0.1}>
        <Text3D {...fontProps}>
          
         R
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>
      <RigidBody position={[0, 0, 0]} rotation-y={.1}>
        <Text3D {...fontProps}>
          
          D
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>
      <RigidBody position={[.6, 0, 0]} rotation-y={0.4}>
        <Text3D {...fontProps}>
          
          E
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>
      <RigidBody position={[1, 0, 0]} rotation-y={0.7}>
        <Text3D {...fontProps}>
          
          N
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

    </group>
  );
}
