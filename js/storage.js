/* ARMAZENAMENTO LOCAL */

const STORAGE_KEY = "frostyUsers";

let users = getUsers();
let editingUserId = null;

function getUsers() {
    const storedUsers = localStorage.getItem(STORAGE_KEY);

    if (!storedUsers) {
        return [];
    }

    return JSON.parse(storedUsers);
}

function saveUsers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}