import React, {useEffect, useState} from 'react'
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import Particles, { initParticlesEngine} from "@tsparticles/react";
import particles from '../particles.json'
// import { loadLinksPreset } from '@tsparticles/preset-links';
import { loadPolygonPath } from '@tsparticles/path-polygon';

const Particle = () => {
  const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// await loadLinksPreset(tsParticles);
			await loadPolygonPath(tsParticles)
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};
  return (
    <div>
      {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particles} />}
    </div>
  )
}

export default Particle