/* INTEGRAÇÃO COM VIACEP */

async function searchCep() {
    const cep = cleanCep(cepInput.value);

    if (cep.length !== 8) {
        showToast("Digite um CEP válido com 8 números.", "warning");
        return;
    }

    try {
        searchCepButton.textContent = "Buscando...";
        searchCepButton.disabled = true;

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            showToast("CEP não encontrado.", "warning");
            return;
        }

        streetInput.value = data.logradouro || "";
        districtInput.value = data.bairro || "";
        cityInput.value = data.localidade || "";
        ufInput.value = data.uf || "";
        stateInput.value = data.estado || getStateName(data.uf);

        numberInput.focus();

        showToast("Endereço preenchido automaticamente pelo ViaCEP.", "success");

    } catch (error) {
        showToast("Erro ao buscar o CEP. Verifique sua conexão e tente novamente.", "danger");
    } finally {
        searchCepButton.textContent = "Buscar CEP";
        searchCepButton.disabled = false;
    }
}