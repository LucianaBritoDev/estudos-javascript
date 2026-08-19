//console.log("Hello, World!");

// Exercício 1:Transformar e Filtrar Listas (filter e map)

// Cenário: Você tem uma lista de produtos. Quer filtrar apenas os que custam menos de R$ 200 e dar 10% de desconto neles.

// 1. Nossa lista inicial de objetos:

const produtos =[
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 50 },
    { nome: "Monitor", preco: 800 }
];


// 2. FILTER (Filtrar): Mantém apenas o que custa menos de 200
const produtosBaratos = produtos.filter(item => item.preco < 200);

// 3. MAP (Transformar): Aplica 10% de desconto nos produtos filtrados
const produtosComDesconto = produtosBaratos.map(item => {
    return {
        nome: item.nome,
        preco: item.preco * 0.9 // Aplica 10% de desconto
    };
});

console.log("Produtos com desconto:", produtosComDesconto);

// O que observar: O Monitor (R$ 800) sumiu da lista final porque foi filtrado pelo filter, e o Teclado/Mouse ficaram mais baratos por causa do map.

// Exercício 2: Sistemas de notas de alunos

// 1. Nossa lista inicial de alunos com suas notas
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Carlos", nota: 4.0 },
  { nome: "Beatriz", nota: 6.5 }
];

// 2. FILTER (Filtrar): Mantém apenas quem tirou nota maior ou igual a 6.0
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6.0);

// 3. MAP (Transformar): Adiciona 1 ponto bônus na nota de cada aprovado
const alunosComBonus = alunosAprovados.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota + 1.0 // Soma 1 ponto à nota atual
  };
});

console.log("Alunos aprovados com nota bônus:", alunosComBonus);


// Exercício 3: Frutas com desconto
const frutas = [
    { nome: "Maça", preco: 3.0 },
    { nome: "Banana", preco: 2.0 },
    { nome: "Laranja", preco: 4.0 }
];

const frutasBaratas = frutas.filter(fruta => fruta.preco < 3.5);

const frutasComDesconto = frutasBaratas.map(fruta => {
    return {
        nome: fruta.nome,
        preco: fruta.preco * 0.9 // Aplica 10% de desconto
    };
});

console.log("Frutas com desconto:", frutasComDesconto);


// Exercício 4: Lista de funcionários com aumento de salário
const funcionários = [
    { nome: "João", preco: 3000 },
    { nome: "Maria", preco: 2500 },
    { nome: "Pedro", preco: 4000 }
];

const funcionariosComAumento = funcionários.map(funcionario => {
    return {
        nome: funcionario.nome,
        preco: funcionario.preco * 1.1 // Aplica 10% de aumento
    };
});

console.log("Funcionários com aumento de salário:", funcionariosComAumento);


// Exercício 5: Lista de materiais escolares com desconto
const materiaisEscolares = [
    { nome: "Caderno", preco: 15.0 },
    { nome: "Lápis", preco: 2.0 },
    { nome: "Borracha", preco: 1.0 }
];

const materiaisComDesconto = materiaisEscolares.map(material => {
    return {
        nome: material.nome,
        preco: material.preco * 0.85 // Aplica 15% de desconto
    };
});

console.log("Materiais escolares com desconto:", materiaisComDesconto);


// Exercício 6. Lista de jogos
const jogos = [
  { nome: "Stardew Valley", preco: 24 },
  { nome: "Hollow Knight", preco: 40 }
];

// 2. REDUCE: Soma todos os preços da lista em um único valor total
// 'acumulador' guarda a soma até o momento (começa em 0)
// 'jogo' é o item atual da lista que está sendo processado
const valorTotal = jogos.reduce((acumulador, jogo) => {
  return acumulador + jogo.preco;
}, 0); // O '0' é o valor inicial do acumulador

console.log("Valor total da compra: R$", valorTotal);