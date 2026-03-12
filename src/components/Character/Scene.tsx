import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    
    // Add a simple geometric figure
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x8B4513, emissive: 0x442200 });
    const figure = new THREE.Mesh(geometry, material);
    scene.add(figure);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const light1 = new THREE.PointLight(0xffaa00, 1, 20);
    light1.position.set(2, 3, 4);
    scene.add(light1);
    
    const light2 = new THREE.PointLight(0x0066ff, 1, 20);
    light2.position.set(-3, 1, 2);
    scene.add(light2);
    
    const animate = () => {
      requestAnimationFrame(animate);
      figure.rotation.x += 0.01;
      figure.rotation.y += 0.02;
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="character-container" />;
};

export default Scene;