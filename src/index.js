class SmartCalculator {
    constructor(initialValue) {
        this.result = '' + initialValue;
    }

    add(number) {
        this.result += ` + ${number}`;
        return this;
    }

    subtract(number) {
        this.result += ` - ${number}`;
        return this;
    }

    multiply(number) {
        this.result += ` * ${number}`;
        return this;
    }

    devide(number) {
        this.result += ` / ${number}`;
        return this;
    }

    pow(number) {
        let temp = this.result.split(' ');
        let base = temp.pop();
        
        if (~base.lastIndexOf('(')) {
            let count = base.split('Math').length - 1;
            let coma = base.lastIndexOf(',');

            temp.push(`${base.slice(0, coma + 1)}Math.pow(${base[coma + 1]},${number})${')'.repeat(count)}`);
        } else {
            temp.push(`Math.pow(${base},${number})`);
        }

        this.result = temp.join(' ');
        return this;
    }

    toString() {
        return eval(this.result);
    }

}

module.exports = SmartCalculator;

