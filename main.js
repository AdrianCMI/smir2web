//variables
var operando1 = '';
var operacion = '';
var operando2 = '';
var resultado_final = '';
var simbolo = '';
var operando_final1 = '';
var operando_final2 = '';





//funcion que enseña los numeros
var pulsar = function(num){;
    if(operacion == '') {;
            operando1 = operando1 + num;
            document.getElementById('pantalla').innerHTML = operando1;
    } else {;
            operando2 = operando2 + num;
            document.getElementById('pantalla').innerHTML = operando2;
    };

};





// funciones de cada simbolo
var btnsumar = function(num) {;
    if(num == '+') {;
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = '+';
    };
}

var btnrestar = function(num) {;
    if(num == '-') {;
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = '-';
    }
};

var btnmultiplicar = function(num) {;
    if(num == '*') {
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = '*';
    }
}

var btndividir = function(num) {;
    if(num == '/') {
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = '/';
    }
}

var btncuadrado = function(num) {;
    if(num == '²') {
        document.getElementById('pantalla').innerHTML = '';
        operacion = num;
        simbolo = '²';
    }
}





//igual
var igualar = function(resultado_final){;
    if(simbolo == '+') {
    var resultado_final = sumar(operando1, operando2);
    document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == '-') {;
        var resultado_final = restar(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == '*') {;
        var resultado_final = multiplicar(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == '/') {;
        var resultado_final = dividir(operando1, operando2);
        document.getElementById('pantalla').innerHTML = resultado_final;
    } else if(simbolo == '²') {;
        var resultado_final = cuadrado(operando1);
        document.getElementById('pantalla').innerHTML = resultado_final;
    }
    resultado_historial = operando1 + ' ' + operacion + ' ' + operando2 + ' ' + '=' + ' ' + resultado_final;
    document.getElementById('historial').innerHTML = resultado_historial;
    operando1 = resultado_final;
    operando2 = '';
}





//funciones de los simbolos de operacion
var sumar = function(operando1, operando2) {;
    return Number(operando1) + Number(operando2);
};

var restar = function(operando1, operando2) {;
    return Number(operando1) - Number(operando2);
};

var multiplicar = function(operando1, operando2) {;
    return Number(operando1) * Number(operando2);
};

var dividir = function(operando1, operando2) {;
    return Number(operando1) / Number(operando2);
};

var cuadrado = function(operando1) {;
    return Number(operando1) * Number(operando1);
};


var btnreset = function() {;
    document.getElementById('pantalla').innerHTML = '';
    operando1 = '';
    operacion = '';
    operando2 = '';
    resultado_final = '';
    simbolo = '';
}