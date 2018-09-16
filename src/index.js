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
        //let sepr = base.lastIndexOf(',');
        //if (~sepr) {
        //    console.log('base', base);
        //    console.log(`${base.slice(0, sepr+1)},Math.pow(${ base[sepr + 1] },${ number })`);
        //    temp.push(`${base.slice(0, sepr, 1)}Math.pow(${base[sepr + 1]},${number})`);
        //} else
        temp.push(`Math.pow(${base},${number})`);

        this.result = temp.join(' ');
        return this;
    }

    toString() {
        return eval(this.result);
    }

}

Object.prototype.toString = function () {
    let test = this.value + this.addValue - this.subValue;
    console.log(test);
}

module.exports = SmartCalculator;

