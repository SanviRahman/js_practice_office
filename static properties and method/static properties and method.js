class Counterr{
    static count=0;

    static increment(){
        Counterr.count++;
    }
    static getCounter(){
        return Counterr.count;
    }
}
Counterr.increment();
Counterr.increment();
Counterr.increment();
Counterr.increment();


let frq= Counterr.getCounter();
console.log(frq);