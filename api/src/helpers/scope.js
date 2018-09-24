class Scope {

    constructor(fields, status) {
        this.fields = fields;
        this.status = status || 400;
        this._errors = [];
        return this;
    }

    field(nome) {
        this.campo = nome;
        this.valor = this.fields[nome];
        return this;
    }

    isNotNull() {
        if(!this.valor)
            this._errors.push(`${this.campo} é obrigatorio.`);

        return this;
    }

    end() {
        if(this._errors.length)
            throw { statusCode: this.status, messages: this._errors };
    }

    isCpfCnpj() {
        if(!this.valor) {
            this._errors.push(`${this.campo} é obrigatório`);
            return this;
        }

        if(this.valor.length == 11)
            return this._isCpf();
        else if(this.valor.length == 14)
            return this._isCnpj();
        else
            return this._errors.push(`${this.campo} inválido. Verifique`);
    }

    _isCpf() {
        this.valor = this.valor.replace(/[^\d]+/g, '');

        var Soma;
        var Resto;
        Soma = 0;
        if (this.valor == "00000000000" ||
            this.valor == "11111111111" ||
            this.valor == "22222222222" ||
            this.valor == "33333333333" ||
            this.valor == "44444444444" ||
            this.valor == "55555555555" ||
            this.valor == "66666666666" ||
            this.valor == "77777777777" ||
            this.valor == "88888888888" ||
            this.valor == "99999999999") 
                return this._errors.push("CPF inválido. Verifique!");

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(this.valor.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(this.valor.substring(9, 10)))
            return this._errors.push("CPF inválido. Verifique!");

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(this.valor.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(this.valor.substring(10, 11)))
            return this._errors.push("CPF inválido. Verifique!");

        return this;
    }

    _isCnpj() {
        this.valor = this.valor.replace(/[^\d]+/g, '');

        if (this.valor == "00000000000000" ||
            this.valor == "11111111111111" ||
            this.valor == "22222222222222" ||
            this.valor == "33333333333333" ||
            this.valor == "44444444444444" ||
            this.valor == "55555555555555" ||
            this.valor == "66666666666666" ||
            this.valor == "77777777777777" ||
            this.valor == "88888888888888" ||
            this.valor == "99999999999999") 
                return this._errors.push("CNPJ inválido. Verifique!");

        let tamanho = this.valor.length - 2;
        let numeros = this.valor.substring(0, tamanho);
        let digitos = this.valor.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return this._errors.push("CNPJ inválido. Verifique!");

        tamanho = tamanho + 1;
        numeros = this.valor.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return this._errors.push("CNPJ inválido. Verifique!");

        return this;
    }
}

module.exports = Scope;