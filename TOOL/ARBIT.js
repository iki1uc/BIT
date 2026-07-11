export function ARBIT(Phi, phi, phi2, phiinfty){
    const stabil = (phi >= 0 && phi2 >= 0);
    return {
        stabil,
        austausch: stabil ? "+" : "-",
        konstellation: stabil ? "Stabil" : "Drift"
    };
}
