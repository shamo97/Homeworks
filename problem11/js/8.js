
let operation = {

}

function Calculator() {
    this.calculate = function (str) {
        let strings = str.split(" ");
        let a = parseInt(strings[0]);
        let b = parseInt(strings[2]);
        for (let oper in operation) {
            if (strings[1] == oper)
                return operation[oper](a, b);

        }
        if (strings[1] == "-" || strings[1] == "+") {
            this.plus = a + b;
            this.minus = a - b;
        }


    }
    this.addOperator = function (name, func) {
        operation[name] = func;

    }


}

let calculator = new Calculator();
calculator.calculate("4 + 2");
alert(calculator.plus);
alert(calculator.minus);
let powerCalc = new Calculator();
powerCalc.addOperator("*", (a, b) => a * b);
powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert(result);



