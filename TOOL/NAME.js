export function NAME(file){
    return {
        core: "iki1uc",
        modul: file,
        signatur: "IKI1UC-" + file.toUpperCase(),
        respo: "60000-" + file.length + "-" + file.charCodeAt(0)
    };
}
