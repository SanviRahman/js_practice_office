for(let i=1; i<=5; i++){
    let line="";
    for(let j=1; j<=5-i; j++){
        line+=" ";
    }
    for(let star=1; star<=(2*i-1); star++){
        line+="*";
    }
    console.log(line);
}