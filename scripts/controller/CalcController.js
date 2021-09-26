class CalcController{
    constructor(){
        //Usa-se - _ antes da váriável para inidcar que elá é privada e só o método pode acessá-la
        this._displayCalc = "0";
        this._dataAtual;
    }
    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }
}