let numero = [];
let resultadoVerifica = false;
let aux = 0;
function enviar(Id) {
    if(Id == '=')
    {
        for(let i = 0; i < numero.length; i ++){
            if(numero[i] == "%")
            {
                numero[i] = "/100";
            }
        }
        document.getElementById('display').value = resultado(numero.join(''));
        numero = [];
        numero.push(document.getElementById('display').value);
    } else{
        numero.push(Id);
        exibir(numero.join(''));
    }
}

function operacao(operacao) {
    numero.push(operacao);
    exibir(numero.join(''));
}

function resultado(expressao){
    resultadoVerifica = true;

    return new Function('return ' + expressao)();
}

function limpar() {
    numero = [];
    resultadoVerifica = false;
    exibir('');
}

function apagar() {
    if(resultadoVerifica === false)
    {
        numero.pop();
        exibir(numero.join(''));
    }
}

function trocarSinal(){
    res = resultado(numero.join(''));
    if(res < 0){
        res = res * -1;
    } else {
        res = res * -1;
    }
   // aux = numero;
    numero = [];
    numero.push(res);
   exibir(numero.join(''));

   //dar pop dps ver se o ultimo é - se for apaga ele e coloca um +, se não for da push em menos e push no numero q foi apagado
}

function exibir(valor){
    document.getElementById('display').value = valor;
}