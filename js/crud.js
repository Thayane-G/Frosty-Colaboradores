/* CRUD DE COLABORADORES */

function renderUsers(list = users) {
    usersTableBody.innerHTML = "";

    totalUsers.textContent = `Total: ${users.length}`;
    updateNotificationBadge();

    if (list.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    list.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="user-info">
                    <span class="user-avatar">${getInitials(user.name)}</span>
                    <strong>${user.name}</strong>
                </div>
            </td>

            <td>${user.email}</td>
            <td>${user.city}</td>
            <td>${user.state || "-"}</td>
            <td>${user.uf}</td>
            <td>${user.phone}</td>

            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editUser('${user.id}')" title="Editar colaborador">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button class="delete-btn" onclick="deleteUser('${user.id}')" title="Excluir colaborador">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        usersTableBody.appendChild(row);
    });
}

function clearForm() {
    userForm.reset();

    userIdInput.value = "";
    editingUserId = null;

    submitButton.innerHTML = `<i class="fa-regular fa-floppy-disk"></i> Cadastrar`;
    formMode.textContent = "Novo cadastro";

    nameInput.focus();
}

function getFormData() {
    return {
        id: editingUserId || generateId(),
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        cpf: cpfInput.value.trim(),
        cep: cepInput.value.trim(),
        street: streetInput.value.trim(),
        number: numberInput.value.trim(),
        district: districtInput.value.trim(),
        city: cityInput.value.trim(),
        state: stateInput.value.trim(),
        uf: ufInput.value.trim().toUpperCase()
    };
}

function validateForm(userData) {
    if (
        !userData.name ||
        !userData.email ||
        !userData.phone ||
        !userData.cep ||
        !userData.street ||
        !userData.number ||
        !userData.district ||
        !userData.city ||
        !userData.state ||
        !userData.uf
    ) {
        showToast("Preencha todos os campos obrigatórios.", "warning");
        return false;
    }

    const emailAlreadyExists = users.some(user => {
        return user.email === userData.email && user.id !== editingUserId;
    });

    if (emailAlreadyExists) {
        showToast("Já existe um colaborador cadastrado com este e-mail.", "warning");
        return false;
    }

    return true;
}

function createUser(userData) {
    users.push(userData);

    saveUsers();
    renderUsers();
    clearForm();

    showToast("Colaborador cadastrado com sucesso.", "success");
}

function updateUser(userData) {
    users = users.map(user => {
        if (user.id === editingUserId) {
            return {
                ...userData,
                id: editingUserId
            };
        }

        return user;
    });

    saveUsers();
    renderUsers();
    clearForm();

    showToast("Cadastro atualizado com sucesso.", "info");
}

function editUser(id) {
    const user = users.find(user => user.id === id);

    if (!user) {
        showToast("Colaborador não encontrado.", "warning");
        return;
    }

    editingUserId = id;

    userIdInput.value = user.id;
    nameInput.value = user.name;
    emailInput.value = user.email;
    phoneInput.value = user.phone;
    cpfInput.value = user.cpf;
    cepInput.value = user.cep;
    streetInput.value = user.street;
    numberInput.value = user.number;
    districtInput.value = user.district;
    cityInput.value = user.city;
    stateInput.value = user.state || "";
    ufInput.value = user.uf;

    submitButton.innerHTML = `<i class="fa-solid fa-pen"></i> Atualizar`;
    formMode.textContent = "Editando cadastro";

    showView("crud");

    const crudMenuItem = Array.from(menuItems).find(item =>
        item.innerText.toLowerCase().includes("crud")
    );

    if (crudMenuItem) {
        setActiveMenu(crudMenuItem);
    }

    setTimeout(() => {
        nameInput.focus();
    }, 400);
}

function deleteUser(id) {
    const user = users.find(user => user.id === id);

    if (!user) {
        showToast("Colaborador não encontrado.", "warning");
        return;
    }

    showConfirm({
        title: "Excluir colaborador",
        message: `Tem certeza que deseja excluir ${user.name}? Essa ação não poderá ser desfeita.`,
        confirmText: "Excluir",
        cancelText: "Cancelar",
        onConfirm: () => {
            users = users.filter(user => user.id !== id);

            saveUsers();
            renderUsers();

            showToast("Colaborador removido com sucesso.", "danger");
        }
    });
}