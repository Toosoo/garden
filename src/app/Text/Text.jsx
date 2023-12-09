import { Text3D, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


export default function Text() {
  const basicMatcap = useTexture("/basic.png");

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
    size: 0.6,
  };

  return (
    <group scale={0.8}>
      <RigidBody position={[-0.7, 0, 0]} rotation-y={0.2}>
        <Text3D {...fontProps}>
          GARDEN
          <meshMatcapMaterial matcap={basicMatcap} />
        </Text3D>
      </RigidBody>

    </group>
  );
}
