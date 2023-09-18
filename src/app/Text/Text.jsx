import { Center, Text3D } from "@react-three/drei";
import { RigidBody, Physics, CuboidCollider } from "@react-three/rapier";
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
    font: "/Climate Crisis.json",
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.07,
    height: 0.01,
    lineHeight: 0.5,
    size: 0.5,
  };

  return (
    <>
    <Center>
    <group>

      <RigidBody position={[0, 0, 3]}>
        <Text3D {...fontProps}>
          T
          <meshNormalMaterial color="blue" />
        </Text3D>
      </RigidBody>
      <RigidBody position={[0, 0, 3.1]}>
        <Text3D {...fontProps}>
          o
          <meshNormalMaterial color="blue" />
        </Text3D>
      </RigidBody>
      <RigidBody position={[0, 0, 0]}>
        <Text3D {...fontProps}>
          s
          <meshNormalMaterial color="blue" />
        </Text3D>
      </RigidBody>
      <RigidBody position={[0, 0, 0]}>
        <Text3D {...fontProps}>
          o
          <meshNormalMaterial color="blue" />
        </Text3D>
      </RigidBody>

      </group>
    </Center>
       <RigidBody type="fixed">
        <CuboidCollider args={[10, 10, 0.5]} position={[0, -1.5, 0]} rotation={[Math.PI * 0.5, 0, 0]} />
      </RigidBody> 
    </>
  );
}
