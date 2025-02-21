let calibration = { alpha: 0, beta: 0, gamma: 0 };

function calibrate() {
    calibration = { alpha, beta, gamma };
}

function handleOrientation(event) {
    const alpha = (event.alpha ? THREE.MathUtils.degToRad(event.alpha) : 0) - calibration.alpha;
    const beta = (event.beta ? THREE.MathUtils.degToRad(event.beta) : 0) - calibration.beta;
    const gamma = (event.gamma ? THREE.MathUtils.degToRad(event.gamma) : 0) - calibration.gamma;

    sphere.rotation.set(beta, alpha, -gamma);
}