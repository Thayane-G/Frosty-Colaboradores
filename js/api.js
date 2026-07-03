/* INTEGRAÇÃO COM VIACEP */

async function searchCep() {
    const cep = cleanCep(cepInput.value);

    if (cep.length !== 8) {
        alert("Digite um CEP válido com 8 números.");
        return;
    }

    try {
        searchCepButton.textContent = "Buscando...";
        searchCepButton.disabled = true;

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }

        streetInput.value = data.logradouro || "";
        districtInput.value = data.bairro || "";
        cityInput.value = data.localidade || "";
        ufInput.value = data.uf || "";
        stateInput.value = data.estado || getStateName(data.uf);

        numberInput.focus();

    } catch (error) {
        alert("Erro ao buscar o CEP. Verifique sua conexão e tente novamente.");
    } finally {
        searchCepButton.textContent = "Buscar CEP";
        searchCepButton.disabled = false;
    }
}