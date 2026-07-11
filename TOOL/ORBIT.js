export function ORBIT(Phi, phi, phi2, phiinfty) {

    return {
        axis: { Phi, phi, phi2, phiinfty },
        orbit: phi * 10,
        raw: phi2 * 2,
        room: phiinfty * 10,
        user: Phi * 10
    };
}
