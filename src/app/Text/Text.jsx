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
    font: "./fonts/Oswald_Regular.json",
    bevelEnabled: true,
    bevelSize: 0,
    bevelThickness: 0.05,
    curveSegments: 10,
    bevelOffset: 0,
    bevelSegments: 1,
    height: 0.01,
    letterSpacing: 0.01,
    size: 0.4,
  };

  return (
    <>
      <group position={[0, 0, 3.2]}>
        <RigidBody position={[-0.4, 0, 0]} rotation-y={-0.2}>
          <Text3D {...fontProps}>
            T
            <meshNormalMaterial color="blue" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[0, 0, 0]} rotation-y={0.1}>
          <Text3D {...fontProps}>
            O
            <meshNormalMaterial color="blue" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[0.4, 0, 0]} rotation-y={0.1}>
          <Text3D {...fontProps}>
            S
            <meshNormalMaterial color="blue" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[0.8, 0, 0]} rotation-y={0.2}>
          <Text3D {...fontProps}>
            O
            <meshNormalMaterial color="green" />
          </Text3D>
        </RigidBody>
      </group>

      <group position={[.4, 0, 2.2]}>
        <RigidBody position={[0, 0, 1]}>
          <Text3D {...fontProps} size={0.1} bevelThickness={0.03}>
            CREATIVE
            <meshNormalMaterial color="black" />
          </Text3D>
        </RigidBody>
        <RigidBody position={[0.6, 0, 1]}>
          <Text3D {...fontProps} size={0.1} bevelThickness={0.03}>
            DEV
            <meshNormalMaterial color="black" />
          </Text3D>
        </RigidBody>
      </group>

      <RigidBody type="fixed">
        <CuboidCollider args={[10, 10, 0.5]} position={[0, -1.4, 0]} rotation={[Math.PI * 0.5, 0, 0]} />
      </RigidBody>
    </>
  );
}
