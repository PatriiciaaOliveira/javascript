function contar(){
    let ini=document.getElementById('txti')
    let fim=document.getElementById('txtf')
    let passo=document.getElementById('txtp')
    let res=document.getElementById('res')
    if(ini.ariaValueMax.length==0||fim.ariaValueMax.length==0||passo.ariaValueMax.length==0) {
    }else{
        res.innerHTML=
        let i=number(ini.value)
        let f=number(fim.value)
        let p=number(passo.value)
        if (i<p){
            for(let c =i; c<=f; c +=p){
                res.innerHTML +=`${c}\u{1F449}`
            }
        }else{
            for (let c = i;c>f; c -=p){
                res.innerHTML+=`\u{1F3c1}`
            }

        }
    }
    res.innerHTML+=`\u{1F3c1}`
}