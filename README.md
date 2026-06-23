# FC Clean Architecture - Casos de Uso para Product

Este projeto implementa o padrão Clean Architecture para gerenciar Produtos usando TypeScript. Inclui um sistema completo de operações CRUD com testes unitários e de integração abrangentes.

## Estrutura do Projeto

```
src/
├── domain/
│   └── product/
│       ├── entity/
│       │   ├── product.ts (Entidade Product)
│       │   └── product.interface.ts
│       ├── repository/
│       │   └── product-repository.interface.ts
│       ├── factory/
│       │   └── product.factory.ts
│       └── service/
│           └── product.service.ts
├── infrastructure/
│   └── product/
│       └── repository/
│           └── sequelize/
│               ├── product.model.ts
│               └── product.repository.ts
└── usecase/
    └── product/
        ├── create/
        │   ├── create.product.dto.ts
        │   ├── create.product.usecase.ts
        │   ├── create.product.unit.spec.ts
        │   └── create.product.integration.spec.ts
        ├── find/
        │   ├── find.product.dto.ts
        │   ├── find.product.usecase.ts
        │   ├── find.product.unit.spec.ts
        │   └── find.product.integration.spec.ts
        ├── list/
        │   ├── list.product.dto.ts
        │   ├── list.product.usecase.ts
        │   ├── list.product.unit.spec.ts
        │   └── list.product.integration.spec.ts
        └── update/
            ├── update.product.dto.ts
            ├── update.product.usecase.ts
            ├── update.product.unit.spec.ts
            └── update.product.integration.spec.ts
```

## Casos de Uso Implementados

### 1. Criar Produto
- **Arquivo**: `src/usecase/product/create/`
- **Descrição**: Cria um novo produto com nome e preço
- **Testes**: Testes unitários (com mocks) + Testes de integração (com banco SQLite)

### 2. Buscar Produto
- **Arquivo**: `src/usecase/product/find/`
- **Descrição**: Busca um produto por ID
- **Testes**: Testes unitários (com mocks) + Testes de integração (com banco SQLite)

### 3. Listar Produtos
- **Arquivo**: `src/usecase/product/list/`
- **Descrição**: Lista todos os produtos
- **Testes**: Testes unitários (com mocks) + Testes de integração (com banco SQLite)

### 4. Atualizar Produto
- **Arquivo**: `src/usecase/product/update/`
- **Descrição**: Atualiza o nome e preço de um produto existente
- **Testes**: Testes unitários (com mocks) + Testes de integração (com banco SQLite)

## Instalação

```bash
npm install
```

## Executando os Testes

### Executar todos os testes
```bash
npm test
```

Este comando irá:
1. Executar verificação de tipos TypeScript com `tsc --noEmit`
2. Executar a suite de testes Jest com todos os testes unitários e de integração

### Executar apenas testes de Product
```bash
npm test -- --testPathPattern="product"
```

### Executar testes em modo watch
```bash
npm test -- --watch
```

### Executar testes com cobertura
```bash
npm test -- --coverage
```

### Executar arquivo de teste específico
```bash
npm test -- src/usecase/product/create/create.product.unit.spec.ts
```

## Cobertura de Testes

O projeto inclui cobertura abrangente de testes:

- **Testes Unitários**: 8 arquivos de teste (um para cada caso de uso)
  - Testam lógica de negócio com repositórios mockados
  - Validam entradas e tratamento de erros
  - Sem interação com banco de dados

- **Testes de Integração**: 8 arquivos de teste (um para cada caso de uso)
  - Testam fluxo completo com banco SQLite em memória
  - Validam interações com repositório
  - Testam funcionalidade de ponta a ponta

## Resultados dos Testes

Todos os 69 testes passam com sucesso:

```
Test Suites: 27 passed, 27 total
Tests:       69 passed, 69 total
Time:        ~4 seconds
```

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Framework**: Node.js
- **Arquitetura**: Clean Architecture com Casos de Uso
- **Testes**: Jest + Supertest
- **Banco de Dados**: SQLite (para testes de integração)
- **ORM**: Sequelize com suporte TypeScript
- **Build**: SWC para transpilação rápida

## Padrões de Arquitetura

### Camada Domain
- Contém entidades com lógica de negócio
- Classes TypeScript puras sem dependências de frameworks
- Repositórios são definidos como interfaces

### Camada Infrastructure
- Implementa interfaces de repositório usando Sequelize
- Modelos de banco de dados e queries

### Camada Use Cases
- Regras de negócio da aplicação
- Orquestra as camadas domain e infrastructure
- Utiliza DTOs para isolamento de entrada/saída

## Características Principais

1. **Type-Safe**: Implementação completa em TypeScript com verificação de tipos rigorosa
2. **Testável**: Separação clara de responsabilidades facilita os testes
3. **Mantível**: Seguindo princípios da Clean Architecture
4. **Escalável**: Fácil adicionar novos casos de uso seguindo o mesmo padrão
5. **Isolado**: Testes unitários usam mocks, testes de integração usam banco real

## Desenvolvimento

O projeto segue padrões de Clean Architecture conforme ensinado no curso DevFullCycle. Cada caso de uso é isolado e pode ser testado independentemente.

### Adicionando um Novo Caso de Uso

1. Criar novo diretório: `src/usecase/product/{operacao}/`
2. Criar interfaces DTO: `{operacao}.product.dto.ts`
3. Implementar caso de uso: `{operacao}.product.usecase.ts`
4. Criar testes unitários: `{operacao}.product.unit.spec.ts`
5. Criar testes de integração: `{operacao}.product.integration.spec.ts`

## Comandos de Build

```bash
# Compilar TypeScript
npm run tsc

# Verificar tipos sem emitir
npm run tsc -- --noEmit

# Modo desenvolvimento com auto-reload
npm run dev
```

## Scripts

- `npm test`: Executar todos os testes com verificação de tipos
- `npm run tsc`: Compilar TypeScript
- `npm run dev`: Iniciar servidor de desenvolvimento com nodemon

## Notas

- Arquivos de teste (spec) são excluídos da compilação TypeScript mas são verificados por Jest
- Todas as operações de banco de dados em testes de integração usam banco SQLite em memória para isolamento
- Repositórios mockados em testes unitários permitem testar lógica de negócio independentemente da camada de persistência

## Autor

Implementação de Clean Architecture para a Entidade Product seguindo os padrões do DevFullCycle.
