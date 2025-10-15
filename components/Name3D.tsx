"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Model() {
  const gltf1 = useLoader(GLTFLoader, "/models/name.glb");
  const gltf2 = useLoader(GLTFLoader, "/models/name2.glb");
  const {darkMode} = useTheme();

  const [scale, setScale] = useState<[number, number, number]>([15, 15, 15]); // default (desktop)
  const[position, setPosition] = useState<[number, number, number]>([15, 15, 15]);

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768;
      setScale(isMobile ? [17, 17, 18] : [20, 20, 15]);
    };
    const updatePosition = () => {
      const isMobile = window.innerWidth < 768;
      setPosition(isMobile ? [-0.1, -0.2, 0] : [-0.1, -0.5, 0]);
    };

    updateScale(); // initial check
    updatePosition();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <primitive
      object={(darkMode? gltf1.scene : gltf2.scene)}
      scale={scale}
      position={position}
    />
  );
}

export default function Name3D() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 35 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10, 80, 5]} intensity={5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
