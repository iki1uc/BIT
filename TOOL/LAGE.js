/* LAGE.js – Lagezuordnung für TOOL / ORBIT / ARBIT */

export function LAGE(Phi, phi, phi2, phiinfty) {
    return {
        x: Phi * 10,
        y: phi * 10,
        z: phiinfty * 10,
        stabil: phi2,
        lage_id: "L-" + Phi + "-" + phi + "-" + phi2 + "-" + phiinfty
    };
}

