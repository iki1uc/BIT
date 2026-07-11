export function EDIT_GUARD(meta){
    return meta.original
        ? "OK – Editierbar"
        : "BLOCKED – Nicht iki1uc Original";
}
