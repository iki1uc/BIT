export function EDIT_GUARD(meta) {

    if (!meta.original) {
        return "BLOCKED – Nicht iki1uc Original";
    }

    return "OK – Editierbar";
}
