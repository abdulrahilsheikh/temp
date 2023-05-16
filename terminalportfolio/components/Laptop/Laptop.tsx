import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import {
	Box,
	Environment,
	OrbitControls,
	OrbitControlsProps,
	PerspectiveCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./Laptop.module.scss";
import { Vector3 } from "three";
import { TerminalInfo } from "../TerminalComponents/TerminalInfo/TerminalInfo";

const Model = ({ state, screenState }: any) => {
	const [scene, setScene] = useState<any>([]);
	const [isFirstRender, setisFirstRender] = useState<any>(true);
	const model = useLoader(GLTFLoader, "model/scene.gltf");
	const { camera, mouse } = useThree();

	useFrame((data) => {
		// console.log(data.camera.position);

		if (screenState) {
			const vect = new Vector3();
			data.camera.position.lerp(vect.set(1, 2, 0), 0.25);
			data.camera.lookAt(0, 0, 0);
		} else {
			const vect = new Vector3();
			data.camera.position.lerp(
				vect.set(-mouse.x * 5, -mouse.y * 5, 7),
				0.05
			);
			data.camera.lookAt(0, 0, 0);
		}
	});
	return (
		<>
			<primitive object={model.scene} scale={0.7} />;
		</>
	);
};
function Rig() {
	const { camera, mouse } = useThree();
	const vec = new Vector3();

	return useFrame(() => {
		camera.position.lerp(vec.set(-mouse.x * 5, -mouse.y * 5, 7), 0.05);
		camera.lookAt(0, 0, 0);
	});
}
export function Laptop({ screenState, changeScreenState }: any) {
	const [state, setState] = useState<any>([0, 2, 7]);
	const ref = useRef<any | null>(null);

	return (
		<div className={`${styles.screen}`}>
			{screenState && (
				<div className={styles.terminalWrapper}>
					<TerminalInfo closeTerminal={changeScreenState} />
				</div>
			)}
			<Canvas>
				<Suspense fallback={null}>
					<Model state={state} screenState={screenState} />
					<Rig />
					<OrbitControls
						enableZoom={false}
						maxPolarAngle={Math.PI / 2.5}
						minPolarAngle={Math.PI / 3.5}
						maxAzimuthAngle={Math.PI / 8}
						minAzimuthAngle={-Math.PI / 8}
						minDistance={screenState ? 0 : 8}
					/>
					<Environment preset="sunset" />
				</Suspense>
			</Canvas>
		</div>
	);
}
