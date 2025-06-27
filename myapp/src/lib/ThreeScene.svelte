<script>
    import * as THREE from 'three';
    import { onMount, onDestroy } from 'svelte';

    let container;
    let scene, camera, renderer, sphere, pointsSphere, animationFrame;
    let mouse = new THREE.Vector2(0, 0);
    let raycaster = new THREE.Raycaster();
    let originalPositions;

    onMount(() => {
        if (!container) return;

        scene = new THREE.Scene();

        const width = container.clientWidth;
        const height = container.clientHeight;

        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 3;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color: 0x888888, roughness: 0.4, metalness: 0.3 // grisácea
        });
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const pointsGeometry = new THREE.SphereGeometry(1.05, 64, 64);
        originalPositions = pointsGeometry.attributes.position.array.slice();
        const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
        pointsSphere = new THREE.Points(pointsGeometry, pointsMaterial);
        scene.add(pointsSphere);

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        window.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        const animate = () => {
            animationFrame = requestAnimationFrame(animate);

            sphere.rotation.y += 0.005;
            pointsSphere.rotation.y += 0.007;

            raycaster.setFromCamera(mouse, camera);

            const positions = pointsSphere.geometry.attributes.position;
            for (let i = 0; i < positions.count; i++) {
                const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;

                const origX = originalPositions[ix];
                const origY = originalPositions[iy];
                const origZ = originalPositions[iz];

                const normal = new THREE.Vector3(origX, origY, origZ).normalize();
                const direction = new THREE.Vector3();
                raycaster.ray.at(1, direction);

                const vertex = new THREE.Vector3(origX, origY, origZ);
                const distance = vertex.distanceTo(direction);

                const strength = Math.max(0, 1 - distance / 0.5); // más exagerado
                const deform = normal.clone().multiplyScalar(strength * 0.6); // más pronunciado

                positions.array[ix] = origX + deform.x;
                positions.array[iy] = origY + deform.y;
                positions.array[iz] = origZ + deform.z;
            }

            positions.needsUpdate = true;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };

        animate();
    });

    onDestroy(() => {
        cancelAnimationFrame(animationFrame);
        renderer?.dispose();
        window.removeEventListener('mousemove', () => {});
    });
</script>

<div bind:this={container} style="width: 100vw; height: 100vh;"></div>
