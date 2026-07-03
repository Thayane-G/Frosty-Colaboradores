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

```text
https://viacep.com.br/ws/

Ao digitar um CEP válido com 8 dígitos e sair do campo, ou ao clicar no botão Buscar CEP, o sistema consulta a API e preenche automaticamente os dados de endereço retornados.

---

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

## Projeto desenvolvido por:

Thayane Gabriele.
