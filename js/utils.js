/* FUNÇÕES AUXILIARES */

function generateId() {
    return Date.now().toString();
}

function onlyNumbers(value) {
    return value.replace(/\D/g, "");
}

function cleanCep(cep) {
    return cep.replace(/\D/g, "");
}

function getInitials(name) {
    return name
        .trim()
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
}

function getStateName(uf) {
    const states = {
        AC: "Acre",
        AL: "Alagoas",
        AP: "Amapá",
        AM: "Amazonas",
        BA: "Bahia",
        CE: "Ceará",
        DF: "Distrito Federal",
        ES: "Espírito Santo",
        GO: "Goiás",
        MA: "Maranhão",
        MT: "Mato Grosso",
        MS: "Mato Grosso do Sul",
        MG: "Minas Gerais",
        PA: "Pará",
        PB: "Paraíba",
        PR: "Paraná",
        PE: "Pernambuco",
        PI: "Piauí",
        RJ: "Rio de Janeiro",
        RN: "Rio Grande do Norte",
        RS: "Rio Grande do Sul",
        RO: "Rondônia",
        RR: "Roraima",
        SC: "Santa Catarina",
        SP: "São Paulo",
        SE: "Sergipe",
        TO: "Tocantins"
    };

    return states[uf] || "";
}

function formatCep(value) {
    value = onlyNumbers(value);

    if (value.length > 8) {
        value = value.slice(0, 8);
    }

    if (value.length > 5) {
        return value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
}

function formatPhone(value) {
    value = onlyNumbers(value);

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length <= 10) {
        return value
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function formatCpf(value) {
    value = onlyNumbers(value);

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    return value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}