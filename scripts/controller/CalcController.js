class CalcController{
    constructor(){
        //Usa-se - _ antes da váriável para inidcar que elá é privada e só o método pode acessá-la

        this._locale        = ('pt-Br')
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl        = document.querySelector('#data');
        this._timeEl        = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    }

    initialize(){      
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);  
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }   
    
    get currentDate(){
        return new Date();
    }
    set currentDate(valor){
        this._currentDate = valor;
    }
}