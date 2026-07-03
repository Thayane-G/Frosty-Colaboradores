/* ELEMENTOS PRINCIPAIS */

const landing = document.getElementById("landing");
const dashboard = document.getElementById("dashboard");
const startButton = document.getElementById("startButton");


/* ELEMENTOS DO FORMULÁRIO */

const userForm = document.getElementById("userForm");

const userIdInput = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const cpfInput = document.getElementById("cpf");
const cepInput = document.getElementById("cep");
const streetInput = document.getElementById("street");
const numberInput = document.getElementById("number");
const districtInput = document.getElementById("district");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const ufInput = document.getElementById("uf");

const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");
const searchCepButton = document.getElementById("searchCepButton");
const newUserButton = document.getElementById("newUserButton");

const usersTableBody = document.getElementById("usersTableBody");
const totalUsers = document.getElementById("totalUsers");
const emptyState = document.getElementById("emptyState");
const formMode = document.getElementById("formMode");
const searchInput = document.getElementById("searchInput");


/* ELEMENTOS DA NOTIFICAÇÃO */

const notificationButton = document.getElementById("notificationButton");
const notificationBadge = document.getElementById("notificationBadge");
const notificationBox = document.getElementById("notificationBox");
const notificationText = document.getElementById("notificationText");
const closeNotification = document.getElementById("closeNotification");


/* ELEMENTOS DO MENU */

const menuItems = document.querySelectorAll(".menu-item");
const dashboardContent = document.querySelector(".dashboard-content");


/* TRANSIÇÃO LANDING → DASHBOARD */

startButton.addEventListener("click", () => {
    startButton.innerHTML = `Carregando <i class="fa-solid fa-spinner fa-spin"></i>`;

    landing.classList.add("hide");

    setTimeout(() => {
        dashboard.classList.add("show");
    }, 650);
});


/* NOTIFICAÇÃO */

function updateNotificationBadge() {
    const total = users.length;

    notificationBadge.textContent = total;

    if (total === 0) {
        notificationBadge.style.display = "none";
        notificationText.textContent = "Nenhum colaborador cadastrado no momento.";
    } else if (total === 1) {
        notificationBadge.style.display = "flex";
        notificationText.textContent = "Existe 1 colaborador cadastrado no sistema.";
    } else {
        notificationBadge.style.display = "flex";
        notificationText.textContent = `Existem ${total} colaboradores cadastrados no sistema.`;
    }
}

notificationButton.addEventListener("click", event => {
    event.stopPropagation();

    updateNotificationBadge();
    notificationBox.classList.toggle("show");
});

closeNotification.addEventListener("click", event => {
    event.stopPropagation();

    notificationBox.classList.remove("show");
});

document.addEventListener("click", event => {
    if (!event.target.closest(".notification-wrapper")) {
        notificationBox.classList.remove("show");
    }
});


/* MENU LATERAL */

const aboutCard = document.createElement("div");
aboutCard.classList.add("about-card");

aboutCard.innerHTML = `
    <div class="card-title">
        <div>
            <h3>Sobre o Projeto:</h3>
        </div>
    </div>

    <p>° Mini-sistema desenvolvido para o desafio técnico da Frosty °</p>

    <div class="about-content">
        <p>
            Este projeto é um sistema web de cadastro de colaboradores com CRUD completo
            e integração com a API ViaCEP.
        </p>

        <p>
            A aplicação permite cadastrar, listar, editar e excluir colaboradores,
            além de buscar automaticamente os dados de endereço a partir do CEP informado.
        </p>

        <div class="about-list">
            <span><i class="fa-solid fa-check"></i> Cadastro de colaboradores</span>
            <span><i class="fa-solid fa-check"></i> Listagem em tabela</span>
            <span><i class="fa-solid fa-check"></i> Edição de registros</span>
            <span><i class="fa-solid fa-check"></i> Exclusão com confirmação</span>
            <span><i class="fa-solid fa-check"></i> Integração com ViaCEP</span>
            <span><i class="fa-solid fa-check"></i> Armazenamento com localStorage</span>
        </div>
    </div>
`;

dashboardContent.appendChild(aboutCard);

let currentView = "";
let viewTimer;

function showView(viewName) {
    if (currentView === viewName) {
        return;
    }

    clearTimeout(viewTimer);

    dashboardContent.classList.add("view-leaving");

    viewTimer = setTimeout(() => {
        dashboardContent.classList.remove(
            "view-dashboard",
            "view-colaboradores",
            "view-crud",
            "view-viacep",
            "view-sobre",
            "view-leaving",
            "view-entering"
        );

        dashboardContent.classList.add(`view-${viewName}`);
        dashboardContent.classList.add("view-entering");

        currentView = viewName;

        setTimeout(() => {
            dashboardContent.classList.remove("view-entering");
        }, 450);

    }, currentView === "" ? 0 : 180);
}

function setActiveMenu(selectedItem) {
    menuItems.forEach(item => item.classList.remove("active"));
    selectedItem.classList.add("active");
}

menuItems.forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();

        setActiveMenu(item);

        const menuText = item.innerText.trim().toLowerCase();

        if (menuText.includes("dashboard")) {
            showView("dashboard");
        }

        if (menuText.includes("colaboradores")) {
            showView("colaboradores");

            setTimeout(() => {
                searchInput.focus();
            }, 400);
        }

        if (menuText.includes("crud")) {
            showView("crud");

            setTimeout(() => {
                nameInput.focus();
            }, 400);
        }

        if (menuText.includes("viacep")) {
            showView("viacep");

            setTimeout(() => {
                cepInput.focus();
            }, 400);
        }

        if (menuText.includes("sobre")) {
            showView("sobre");
        }
    });
});


/* ENVIO DO FORMULÁRIO */

userForm.addEventListener("submit", event => {
    event.preventDefault();

    const userData = getFormData();

    if (!validateForm(userData)) {
        return;
    }

    if (editingUserId) {
        updateUser(userData);
    } else {
        createUser(userData);
    }
});


/* BOTÕES DO FORMULÁRIO */

clearButton.addEventListener("click", clearForm);

newUserButton.addEventListener("click", () => {
    clearForm();

    const crudMenuItem = Array.from(menuItems).find(item =>
        item.innerText.toLowerCase().includes("crud")
    );

    if (crudMenuItem) {
        setActiveMenu(crudMenuItem);
    }

    showView("crud");

    setTimeout(() => {
        nameInput.focus();
    }, 400);
});


/* VIACEP */

searchCepButton.addEventListener("click", searchCep);

cepInput.addEventListener("blur", () => {
    const cep = cleanCep(cepInput.value);

    if (cep.length === 8) {
        searchCep();
    }
});


/* BUSCA DE COLABORADORES */

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredUsers = users.filter(user => {
        return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.city.toLowerCase().includes(searchTerm) ||
            (user.state || "").toLowerCase().includes(searchTerm) ||
            user.uf.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm)
        );
    });

    renderUsers(filteredUsers);
});


/* MÁSCARAS DOS CAMPOS */

cepInput.addEventListener("input", () => {
    cepInput.value = formatCep(cepInput.value);
});

phoneInput.addEventListener("input", () => {
    phoneInput.value = formatPhone(phoneInput.value);
});

cpfInput.addEventListener("input", () => {
    cpfInput.value = formatCpf(cpfInput.value);
});


/* INICIALIZAÇÃO */

showView("dashboard");
renderUsers();