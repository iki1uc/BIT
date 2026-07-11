export function RESPO_INTEGRATION(meta, orbit, arbit){
    return {
        id: "60000-" + orbit.axis.Phi + "-" + orbit.axis.phi,
        status: meta.original ? "IKI1UC-OK" : "FEHLER",
        konstellation: arbit.konstellation,
        austausch: arbit.austausch
    };
}
