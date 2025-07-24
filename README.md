# 🚀 Lista de Exercícios 3 – Desenvolvimento Web Básico

Este repositório contém a resolução da terceira lista de exercícios da disciplina de Desenvolvimento Web Básico. O projeto foi desenvolvido para aplicar e demonstrar conhecimentos fundamentais em **HTML5 semântico** e **CSS3**, incluindo layouts responsivos com **Flexbox** e **Grid**, além de interatividade básica com um menu mobile.

## ✨ Funcionalidades Implementadas

O projeto é dividido em várias páginas, cada uma focada em um conjunto específico de habilidades:

### 1. **Página Principal (`index.html`)**

-   **Estrutura Semântica:** Utilização correta de tags como `<header>`, `<main>`, `<section>` e `<footer>`.
-   **Conteúdo:** Apresenta um cabeçalho com título e introdução, seções de "Missão" e "Visão", e um rodapé com informações de copyright.
-   **Estilização CSS:** Aplicação de `padding`, `margin`, `border`, cores de fundo e de texto para evidenciar o Box Model de cada seção.

### 2. **Listas e Navegação (`listas.html`)**

-   **Lista Não Ordenada:** Uma `<ul>` com uma lista de hobbies.
-   **Lista Ordenada:** Uma `<ol>` com os passos de uma receita simples.
-   **Navegação Externa:** Um bloco `<nav>` com três links externos para sites de referência.

### 3. **Formulário de Feedback (`feedback.html`)**

-   **Formulário Completo:** Um formulário estruturado para coletar feedback do usuário, contendo campos para:
    -   Nome (texto)
    -   E-mail (email)
    -   Endereço Completo (textarea)
    -   Tipo de feedback (select/options)
    -   Mensagem de Feedback (textarea)
-   **Estilização e Foco:** Campos de formulário estilizados que mudam de aparência ao receber foco (`:focus`).

### 4. **Galeria de Imagens Responsiva (`galeria.html`)**

-   **CSS Grid Layout:** Uma galeria com 8 imagens e legendas, organizada em um grid que se ajusta ao tamanho da tela.
-   **CSS Flexbox:** O contêiner da galeria utiliza Flexbox para ser centralizado na página e permitir a quebra de linha das imagens em telas menores.
-   **Media Queries:** O número de colunas do grid é alterado para se adaptar a diferentes resoluções (ex: 4 colunas em desktop, 2 em tablets e 1 em mobile).

### 5. **Menu Hamburger (Mobile)**

-   **Responsividade:** Um menu "hamburger" é implementado e aparece apenas em telas com **largura máxima de 600px**.
-   **Interatividade:** Ao ser clicado, o menu expande ou recolhe a navegação principal, melhorando a experiência de usuário em dispositivos móveis.

---

## 💻 Tecnologias Utilizadas

-   **HTML5:** Foco em estrutura semântica e acessibilidade.
-   **CSS3:**
    -   **Flexbox:** Para alinhamento e centralização de contêineres.
    -   **Grid Layout:** Para a criação de galerias complexas e responsivas.
    -   **Media Queries:** Para adaptar o layout a diferentes tamanhos de tela.
    -   **Seletores Avançados:** Uso de seletores de classe (`.destaque`), ID (`#importante`) e pseudo-classes (`:focus`, `:hover`).
