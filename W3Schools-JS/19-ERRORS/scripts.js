try{

    adddlert("Welcome to JavaScript!");

}catch(err){
    document.getElementById('demo').innerHTML = err.message;

}finally{
    document.getElementById('demo2').innerHTML = "Mesmo dando erro ele vai exibir essa mensagem";
}