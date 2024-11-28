
# Aula 01: Introdução ao JavaScript Moderno (ES6+)

### Table of Contents
1. [JavaSript, ECMASCript e ES6](#javaSript-ecmascript-e-es6)
2. [Versões do JavaScript](#versões-do-javascript)
3. [Por que ES6 é importante?](#por-que-es6-é-importante)
4. [Principais Funcionalidades do ES6+](#principais-funcionalidades-do-es6)
5. [Diferenças entre `var`, `let` e `const`](#diferenças-entre-var-let-e-const)
6. [Imperativo vs. Declarativo](#imperativo-vs-declarativo)
8. [Métodos Declarativos de Arrays - Parte 1](#m%C3%A9todos-declarativos-de-arrays-que-retornam-algo-parte-1)
9. Exemplos Old vs. Modern
    * [Transformação/MAPEAR `array.map`](#transforma%C3%A7%C3%A3omapear-arraymap)
    * [Sub conjunto/FILTRAGEM `array.filter`](#sub-conjuntofiltragem-arrayfilter)
    * [ENCONTRAR um elemento `array.find`](#encontrar-um-elemento-arrayfind)
    * [Encontrar o ÍNDICE de um elemento `array.findIndex`](#encontrar-o-%C3%ADndice-de-um-elemento-arrayfindindex)
    * [REDUZIR o conjunto a uma informação `array.reduce`](#reduzir-o-conjunto-a-uma-informa%C3%A7%C3%A3o-arrayreduce)
    * [ALGUM dos elementos corresponde a um critério `array.some`](#algum-dos-elementos-corresponde-a-um-crit%C3%A9rio-arraysome)
    * [TODOS os elementos correspondem a um critério `array.every`](#todos-os-elementos-correspondem-a-um-critério-arrayevery)

## JavaSript, ECMASCript e ES6

### O que é ECMAScript (ES)?
JavaScript é uma linguagem de programação mantida pela **ECMA International**,
uma organização responsável por criar padrões técnicos. O nome oficial do JavaScript
dentro dessa padronização é **ECMAScript**.

### Versões do JavaScript
Assim como qualquer 'software', o JavaScript é versionado. A cada nova versão, são
introduzidas melhorias, novos recursos e correções. A versão **ES6 (também conhecida
como ECMAScript 2015)** trouxe mudanças significativas e modernas que revolucionaram
a maneira como programamos em JavaScript hoje.
Veja a lista completa de versões no [W3Schools](https://www.w3schools.com/js/js_versions.asp).

### Por que ES6 é importante?
O **ES6** foi um marco importante na evolução do JavaScript, introduzindo muitos recursos
que facilitaram o desenvolvimento e trouxeram a linguagem para um padrão mais moderno.
Desde então, várias novas versões (ES7, ES8, etc.) foram lançadas, cada uma adicionando
novas funcionalidades.

### Principais Funcionalidades do ES6+
- **Declaração de variáveis com `let` e `const`** (em vez de `var`)
- **Arrow functions**: Funções mais curtas com escopo de `this` mais previsível.
- **Desestruturação de arrays e objetos**: Forma mais fácil de extrair valores.
- **Operadores rest/spread**: Manipulação mais flexível de arrays e objetos.
- **Métodos declarativos em arrays**: Como `map`, `filter`, `reduce`, entre outros.
- Veja a lista completa de inclusições no [W3Schools](https://www.w3schools.com/js/js_es6.asp).

## Diferenças entre `var`, `let` e `const`

* `var` Declara uma variável de escopo global ou de função, dependendo do contexto.
* `let` Declara uma variável de escopo de bloco (mais seguro e previsível).
* `const` Declara uma constante de escopo de bloco, o que significa que o valor não pode ser reatribuído.

### Exemplo

```javascript
var a = 10;
let b = 20;
const c = 30;

// var é global, let e const são de bloco
if (true) {
  var a = 40;
  let b = 50;
  const c = 60;
}

console.log(a); // 40 (alterado globalmente)
console.log(b); // 20 (não foi alterado, escopo de bloco)
console.log(c); // 30 (não foi alterado, escopo de bloco)
console.log(window.a); // 40
console.log(window.b); // undefined
console.log(window.c); // undefined
```

## Arrow Functions

* Forma mais curta de escrever funções.
* O this dentro de arrow functions mantém o valor do contexto no qual a função foi definida, ao contrário das funções tradicionais.

### Exemplos

```javascript
// Função tradicional
function somaVelha(a, b) {
  return a + b;
}

console.log(somaVelha(5, 3)); // 8

// Arrow function
const somaModerna = (a, b) => a + b;

console.log(somaModerna(5, 3)); // 8
```

```javascript
// Quando o retorno não é imediato
const somaFrase = (a, b) => {
    const soma = a + b;
    
    return 'O resultado é: ' + soma;
};

console.log(somaFrase(5, 3)); // 'O resultado é 8'
```

```javascript
// Quando temos um só parametro
const dobro = numero => numero * 2;

console.log(dobro(10)); // 20
```

### Escopo

**Função Tradicional (Escopo de this dinâmico):**

Neste exemplo, a função setInterval tem seu próprio contexto de this, que não é o objeto Pessoa. Isso causa um problema, já que this.idade não está acessando o this correto.

```javascript
function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++; // Aqui, `this` não se refere ao objeto `Pessoa`
        console.log(this.idade); // Na verdade, `this` refere-se ao escopo global (ou `undefined` no modo estrito)
    }, 1000);
}

const p = new Pessoa();
// Resultado: `NaN`, pois `this.idade` não está no contexto do objeto `Pessoa`
```

**Arrow Function (Escopo de this léxico):**

O this é capturado do contexto léxico em que a função foi definida, ou seja, o this dentro da arrow function será o mesmo this fora dela (neste caso, o objeto Pessoa). Isso resolve o problema de referência de escopo.

```javascript
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++; // Aqui, `this` é o objeto `Pessoa` graças ao escopo léxico da arrow function
    console.log(this.idade); // O `this` correto é mantido
  }, 1000);
}

const p = new Pessoa();
// Resultado: O valor de `this.idade` será incrementado corretamente a cada segundo
```

## Imperativo vs. Declarativo

* Método imperativo usa comandos detalhados sobre como o código deve executar, manipulando diretamente estruturas como loops.

### Método imperativo usando `for` (complicado e longo):

```Javascript
const numeros = [1, 2, 3, 4, 5];
const dobro = [];

for (var i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2);
};

console.log(dobro); // [2, 4, 6, 8, 10]
```

Podemos ser imperativos usando erroneamente um método moderno:

```Javascript
const numeros = [1, 2, 3, 4, 5];
const dobro = [];

numeros.forEach(numero => dobro.push(numero * 2));

console.log(dobro); // [2, 4, 6, 8, 10]
```

### Declarativo (simples e legível):

```Javascript
const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(numero => numero * 2);

console.log(dobro); // [2, 4, 6, 8, 10]
```

O código declarativo se concentra no que deve ser feito, e não em como deve ser feito, utilizando métodos de alto nível.

## Métodos declarativos de arrays que retornam algo (parte 1)

* Entrada (🍅, 🍐, 🍊) - Transformação/MAPEAR - Saída (🍇, 🍍, 🥭) = `array.map`
* Entrada (🍅, 🍐, 🍊) - Sub conjunto/FILTRAGEM - Saída (🍅, 🍊)  = `array.filter`
* Entrada (🍅, 🍐, 🍊) - ENCONTRAR um elemento - Saída 🍐 = `array.find`
* Entrada (🍅, 🍐, 🍊) - Encontrar o ÍNDICE de um elemento - Saída `1` = `array.findIndex`
* Entrada (🍅, 🍐, 🍊) - REDUZIR o conjunto a uma informação - Saída `€ 34` = `array.reduce`
* Entrada (🍅, 🍐, 🍊) - ALGUM dos elementos é 🍐? - Saída `true` = `array.some`
* Entrada (🍅, 🍐, 🍊) - TODOS os elementos são 🍐? - Saída `false` = `array.every`

## Exemplos old vs. modern

### Transformação/MAPEAR `array.map`

Old:

```Javascript
const frutas = ['tomate', 'pera', 'laranja'];
const frutasNaLinguaDoP = [];

for (var i = 0; i < frutas.length; i++) {
    const frutaP = frutas[i].replaceAll('t', 'p').replace('r', 'p').replace('l', 'p');
    frutasNaLinguaDoP.push(frutaP);
};

console.log(frutasNaLinguaDoP); // ['pomape', 'pepa', 'papanja']
```

Modern:

```Javascript
const frutas = ['tomate', 'pera', 'laranja'];

const frutasNaLinguaDoP = frutas.map(fruta => fruta.replaceAll('t', 'p').replace('r', 'p').replace('l', 'p'));

console.log(frutasNaLinguaDoP); // ['pomape', 'pepa', 'papanja']
```

### Sub conjunto/FILTRAGEM `array.filter`

Old:

```Javascript
const frutas = ['tomate', 'manga', 'pera', 'melão', 'laranja', 'morango'];
const frutasIniciadasComM = [];

for (var i = 0; i < frutas.length; i++) {
    if (frutas[i].substring(0, 1) === 'm') {
        frutasIniciadasComM.push(frutas[i]);
    }
};

console.log(frutasIniciadasComM); // ['manga', 'melão', 'morango']
```

Modern:

```Javascript
const frutas = ['tomate', 'manga', 'pera', 'melão', 'laranja', 'morango'];

const frutasIniciadasComM = frutas.filter(fruta => fruta.substring(0, 1) === 'm');

console.log(frutasIniciadasComM); // ['manga', 'melão', 'morango']
```

### ENCONTRAR um elemento `array.find`

Old:

```javascript
const utilizadores = [
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 30 },
  { nome: 'Carlos', idade: 35 }
];
let utilizador30;

for (let i = 0; i < utilizadores.length; i++) {
  if (utilizadores[i].idade === 30) {
      utilizador30 = utilizadores[i];
      break;
  }
}

console.log(utilizador30); // { nome: 'João', idade: 30 }
```

Modern:

```javascript
const utilizadores = [
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 30 },
  { nome: 'Carlos', idade: 35 }
];
const utilizador30 = utilizadores.find(u => u.idade === 30);

console.log(utilizador30); // { nome: 'João', idade: 30 }
```

### Encontrar o ÍNDICE de um elemento `array.findIndex`

Old:

```javascript
const utilizadores = [
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 30 },
  { nome: 'Carlos', idade: 35 }
];
let utilizador30Indice;

for (let i = 0; i < utilizadores.length; i++) {
  if (utilizadores[i].idade === 30) {
      utilizador30Indice = i;
      break;
  }
}

console.log(utilizador30Indice); // 1
```

Modern:

```javascript
const utilizadores = [
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 30 },
  { nome: 'Carlos', idade: 35 }
];
const utilizador30 = utilizadores.findIndex(u => u.idade === 30);

console.log(utilizador30); // 1
```

### REDUZIR o conjunto a uma informação `array.reduce`

Old:

```javascript
const carrinho = [
  { nome: 'tomate', preco: 9 },
  { nome: 'pera', preco: 10 },
  { nome: 'laranja', preco: 15 }
];
let total = 0;

for (let i = 0; i < carrinho.length; i++) {
  total += carrinho[i].preco
}

console.log(total); // 34
```

Modern:

```javascript
const carrinho = [
    { nome: 'tomate', preco: 9 },
    { nome: 'pera', preco: 10 },
    { nome: 'laranja', preco: 15 }
];

const total = carrinho.reduce((carga, item) => carga + item.preco, 0);

console.log(total); // 34
```

### ALGUM dos elementos corresponde a um critério `array.some`

Old:

```javascript
const frutas = ['tomate', 'pera', 'laranja'];;
let algumaFrutaComecaComP = false;

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i].substring(0, 1) === 'p') {
      algumaFrutaComecaComP = true;
    break;
  }
}

console.log(algumaFrutaComecaComP); // true
```

Modern:

```javascript
const frutas = ['tomate', 'pera', 'laranja'];;
const algumaFrutaComecaComP = frutas.some(fruta => fruta.substring(0, 1) === 'p');

console.log(algumaFrutaComecaComP); // true
```

### TODOS os elementos correspondem a um critério `array.every`

Old:

```javascript
const frutas = ['tomate', 'pera', 'laranja'];;
let todasAsFrutaComecamComP = true;

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i].substring(0, 1) !== 'p') {
      todasAsFrutaComecamComP = false;
    break;
  }
}

console.log(todasAsFrutaComecamComP); // false
```

Modern:

```javascript
const frutas = ['tomate', 'pera', 'laranja'];;
const todasAsFrutaComecamComP = frutas.every(fruta => fruta.substring(0, 1) === 'p');

console.log(todasAsFrutaComecamComP); // false
```