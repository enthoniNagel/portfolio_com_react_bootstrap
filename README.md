# Atividade Avaliativa 01

## Projeto: Página Pessoal

### Instruções
Criar uma página que apresente informações sobre você, seus projetos e formas de contato.

### Estrutura da Página

#### Cabeçalho (Header):
- Um título com seu nome.
- Um menu de navegação com links para "Sobre", "Projetos" e "Contato".

#### Seção "Sobre":
- Uma breve descrição sobre você.
- Uma foto sua.

#### Seção "Projetos":
- Uma grade de cartões (cards) exibindo os projetos mais relevantes em que você trabalhou ou desenvolveu na faculdade.
- Cada cartão deve conter um título, uma breve descrição e um link para o repositório do projeto no Github.

#### Seção "Contato":
- Um formulário simples com campos para nome, email e mensagem.
- Um botão para enviar o formulário (sem funcionalidade de envio real, apenas estilizado).

#### Rodapé (Footer):
- Links para suas redes sociais (GitHub e LinkedIn).

### Passos para Implementação

1. **Configuração do Projeto:**
   - Crie um novo projeto React usando `create-react-app`.
   - Instale o React Bootstrap com `npm install react-bootstrap bootstrap`.
   - Importe o CSS do Bootstrap no seu arquivo `index.js` ou `App.js`.

2. **Estrutura da Aplicação:**
   - Crie componentes para cada seção: Header, About, Projects, Contact, e Footer.
   - Utilize os componentes do React Bootstrap, como Navbar, Container, Row, Col, Card, e Form.

3. **Preenchimento de Dados:**
   - No componente About, adicione seu texto e imagem.
   - No componente Projects, crie um array de objetos para representar seus projetos e mapeie-os para gerar os cartões.

4. **Estilo e Responsividade:**
   - Utilize classes do Bootstrap para garantir que a página seja responsiva.
   - Adicione algum estilo customizado, se desejar, para personalizar a aparência.

5.**Testes:**
   - Verifique a navegação entre as seções e o layout em diferentes tamanhos de tela.
   - **Problemas Identificados:**
     - O botão "Quer saber um segredo?" quase não é clicável devido ao movimento constante e sai um som para dar uma descontraída.
     - O som associado ao botão "Precione para saber mais 'Sobre mim'" está funcionando.

### Extensões (opcional):
- Incluir um modal que exibe detalhes de cada projeto ao clicar no cartão.

### Entrega:
Hospede seu projeto no GitHub Pages e envie o link da sua página até 14/10 às 23h59.
# portfolio_com_react_bootstrap
