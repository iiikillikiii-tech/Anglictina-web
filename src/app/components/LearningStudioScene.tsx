"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SceneMesh = THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;

function makePanel(
  width: number,
  height: number,
  depth: number,
  color: number,
  position: [number, number, number],
  rotation: [number, number, number],
) {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const material = new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.38,
    metalness: 0.18,
    transmission: 0.08,
    thickness: 0.2,
    clearcoat: 0.55,
    clearcoatRoughness: 0.22,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  return mesh;
}

export function LearningStudioScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.15, 9.4);

    const studio = new THREE.Group();
    studio.scale.setScalar(0.82);
    scene.add(studio);

    const keyLight = new THREE.PointLight(0xffd36a, 18, 26);
    keyLight.position.set(-4.4, 3.8, 5.6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x47d5c2, 18, 24);
    rimLight.position.set(4.6, -1.4, 4.8);
    scene.add(rimLight);

    const fillLight = new THREE.HemisphereLight(0xa991ff, 0x05060a, 1.2);
    scene.add(fillLight);

    const mainPanel = makePanel(3.15, 4.35, 0.16, 0xf8f7ef, [0, -0.05, 0], [-0.18, -0.34, 0.07]);
    studio.add(mainPanel);

    const workbook = makePanel(2.25, 3.05, 0.2, 0xff7a61, [-1.64, -0.78, 0.74], [-0.1, 0.34, -0.12]);
    studio.add(workbook);

    const lessonCard = makePanel(2.05, 1.05, 0.13, 0x47d5c2, [1.66, 1.18, 0.55], [0.1, -0.42, 0.16]);
    studio.add(lessonCard);

    const grammarCard = makePanel(1.7, 0.82, 0.12, 0xffd36a, [1.36, -1.35, 0.9], [-0.04, -0.28, -0.06]);
    studio.add(grammarCard);

    const screenLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x10131c,
      transparent: true,
      opacity: 0.68,
    });

    for (let index = 0; index < 6; index += 1) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(1.9 - index * 0.12, 0.045, 0.035), screenLineMaterial);
      line.position.set(-0.18, 1.28 - index * 0.38, 0.14);
      line.rotation.copy(mainPanel.rotation);
      studio.add(line);
    }

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.95, 0.008, 16, 160), ringMaterial);
    ring.rotation.set(1.15, 0.22, -0.12);
    studio.add(ring);

    const orbitMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xa991ff,
      roughness: 0.28,
      metalness: 0.3,
      clearcoat: 0.8,
    });
    const orbiters: SceneMesh[] = [];

    for (let index = 0; index < 14; index += 1) {
      const shape = index % 3 === 0 ? new THREE.SphereGeometry(0.06, 18, 18) : new THREE.BoxGeometry(0.11, 0.11, 0.11);
      const orbiter = new THREE.Mesh(shape, orbitMaterial.clone());
      const angle = (index / 14) * Math.PI * 2;
      orbiter.position.set(Math.cos(angle) * 3.2, Math.sin(angle) * 1.9, Math.sin(angle * 1.7) * 0.72);
      studio.add(orbiter);
      orbiters.push(orbiter);
    }

    const cursor = { x: 0, y: 0 };
    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      cursor.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    resize();

    let frame = 0;
    let raf = 0;

    const render = () => {
      frame += reduceMotion ? 0.002 : 0.012;
      studio.rotation.y += ((cursor.x * 0.16) - studio.rotation.y) * 0.035;
      studio.rotation.x += ((-cursor.y * 0.08) - studio.rotation.x) * 0.035;
      studio.position.y = Math.sin(frame * 0.8) * 0.06;
      ring.rotation.z = frame * 0.28;

      orbiters.forEach((orbiter, index) => {
        const angle = frame * (0.36 + index * 0.004) + (index / orbiters.length) * Math.PI * 2;
        orbiter.position.x = Math.cos(angle) * (3.1 + (index % 4) * 0.08);
        orbiter.position.y = Math.sin(angle) * (1.72 + (index % 5) * 0.05);
        orbiter.position.z = Math.sin(angle * 1.6) * 0.72;
        orbiter.rotation.x += 0.01;
        orbiter.rotation.y += 0.012;
      });

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      scene.traverse((object) => {
        const mesh = object as SceneMesh;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }
        const material = mesh.material;
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose());
        } else if (material) {
          material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="learning-studio-canvas" aria-hidden="true" />;
}
