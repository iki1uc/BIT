export function ARBIT(Phi, phi, phi2, phiinfty) {

    const stabil = (phi2 >= 0 && phi >= 0);

    return {
        stabil,
        austausch: stabil ? "+" : "-",
        konstellation: stabil ? "Stabil" : "Drift"
    };
}
