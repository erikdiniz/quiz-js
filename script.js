const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para se referir a um arquivo externo de script JavaScript?",
        respostas: [
            "<script src='script.js'>",
            "<js src='script.js'>",
            "<script href='script.js'>",
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a função utilizada para imprimir uma mensagem no console do navegador?",
        respostas: [
            "print()",
            "console.log()",
            "log()",
        ],
        correta: 1
    },

    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "v myVar;",
            "var myVar;",
            "variable myVar;",
        ],
        correta: 1
    },

    {
        pergunta: "Qual destes métodos JavaScript não é utilizado para selecionar elementos HTML?",
        respostas: [
            "getElementById()",
            "querySelector()",
            "selectElement()",
        ],
        correta: 2
    },

    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Verifica igualdade de valor e tipo",
            "Verifica igualdade de valor apenas",
            "Atribuição de valor",
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o tipo de dado retornado pela função typeof?",
        respostas: [
            "String",
            "Number",
            "String ou Number",
        ],
        correta: 2
    },

    {
        pergunta: "O que o método 'push()' faz em JavaScript?",
        respostas: [
            "Remove o último elemento de um array",
            "Adiciona um elemento ao final de um array",
            "Inverte a ordem dos elementos de um array",
        ],
        correta: 1
    },

    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->",
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
        respostas: [
            "10",
            "7",
            "325",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é a função utilizada para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToNumber()",
            "toNumber()",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for (let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}