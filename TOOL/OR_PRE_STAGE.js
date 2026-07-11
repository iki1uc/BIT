/* OR_PRE_STAGE – Vorstufe für alle iki1uc-Systemdateien */

export function OR_PRE_STAGE(file) {

    return {
        original: file.includes("iki1uc"),
        editable: true,
        signature: "IKI1UC-CORE",
        arbit_ready: true,
        orbit_ready: true,
        respo_ready: true
    };
}
