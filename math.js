class Operacion {
    factorial(n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }

    fibonacci(n) {
        if (n < 2) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}

module.exports = Operacion;
