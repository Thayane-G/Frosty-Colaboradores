# Frosty | Mini-Sistema de Cadastro com ViaCEP

Projeto desenvolvido para o desafio técnico da **Frosty**, com o objetivo de criar uma aplicação web simples para cadastro e gerenciamento de colaboradores, utilizando integração com a API **ViaCEP** para preenchimento automático de endereço a partir do CEP.

---

## Sobre o projeto

O sistema permite cadastrar, visualizar, editar e remover colaboradores em uma interface web moderna e intuitiva.

Além do CRUD completo, o projeto conta com integração ao ViaCEP, preenchendo automaticamente os campos de endereço ao informar um CEP válido.

---

## Funcionalidades

- Cadastro de colaboradores
- Listagem dos colaboradores cadastrados
- Edição de dados de um colaborador
- Exclusão com confirmação
- Busca automática de endereço pelo CEP
- Preenchimento automático de:
  - Rua
  - Bairro
  - Cidade
  - Estado
  - UF
- Busca de colaboradores cadastrados
- Contador dinâmico de colaboradores
- Armazenamento local com `localStorage`
- Navegação interna por abas
- Interface responsiva e personalizada para a identidade visual da Frosty

---

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- API ViaCEP
- LocalStorage
- Font Awesome
- Google Fonts

---

## Integração com ViaCEP

A integração foi feita utilizando a API pública do ViaCEP:

https://viacep.com.br/ws/

Ao digitar um CEP válido com 8 dígitos e sair do campo, ou ao clicar no botão Buscar CEP, o sistema consulta a API e preenche automaticamente os dados de endereço retornados.

---

## Como executar o projeto

1. Clone este repositório:

```bash
git clone COLE_AQUI_O_LINK_DO_REPOSITORIO
```

2. Acesse a pasta do projeto:

```bash
cd frosty-colaboradores
```

3. Abra o arquivo `index.html` no navegador.

Também é possível executar o projeto utilizando a extensão **Live Server** no Visual Studio Code.

---

```text

## Estrutura do projeto

frosty-colaboradores/ <br>
├── index.html <br>
├── README.md <br>
├── css/ <br>
│   ├── style.css <br>
│   ├── landing.css <br>
│   ├── dashboard.css <br>
│   ├── animations.css <br>
│   └── responsive.css <br>
├── js/ <br>
│   └── main.js <br>
└── assets/ <br>
    ├── pote-chocolate.png <br>
    ├── pote-colorido.png <br>
    ├── picole-ninho.png <br>
    ├── morango.png <br>
    ├── chocolate.png <br>
    └── sorvete-creme.png <br>

```
---

## Organização dos arquivos

O projeto foi organizado em arquivos separados para facilitar a manutenção e leitura do código:

- `style.css`: configurações globais, variáveis e importação dos estilos;
- `animations.css`: animações utilizadas no projeto;
- `landing.css`: estilos da tela inicial;
- `dashboard.css`: estilos da área principal do sistema;
- `responsive.css`: ajustes para telas menores;
- `utils.js`: funções auxiliares e máscaras de campos;
- `storage.js`: manipulação do `localStorage`;
- `api.js`: integração com a API ViaCEP;
- `crud.js`: funções de cadastro, listagem, edição e exclusão;
- `main.js`: inicialização do sistema, eventos principais, menu e notificações.

---


## !Preview do projeto

<img width="1918" height="1020" alt="Captura de tela 2026-07-03 073317" src="https://github.com/user-attachments/assets/f3e2e417-1e12-42d4-8098-59fb79a665bb" />
<img width="1918" height="1026" alt="Captura de tela 2026-07-03 080035" src="https://github.com/user-attachments/assets/399f3a59-c418-47c0-87fb-8432f7f29474" />
<img width="1918" height="1021" alt="Captura de tela 2026-07-03 080058" src="https://github.com/user-attachments/assets/1f24d79d-869e-4298-a105-b501666fe4a9" />
<img width="1918" height="1022" alt="Captura de tela 2026-07-03 080113" src="https://github.com/user-attachments/assets/9b81e43e-e52b-481c-ba0d-e04185ad780b" />
<img width="1918" height="1020" alt="Captura de tela 2026-07-03 080126" src="https://github.com/user-attachments/assets/36effd1d-f412-4796-bcfa-d937741aab25" />
<img width="1918" height="1015" alt="Captura de tela 2026-07-03 080135" src="https://github.com/user-attachments/assets/c895f3b7-1bb1-46a4-8521-a9cdd39ff1f2" />

---

## Projeto desenvolvido por:

**Thayane Gabriele**

Projeto desenvolvido para o desafio técnico da Frosty.
