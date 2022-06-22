function criptografar(msg_s, key, cripto){

    var send = []
    var key = []
    var cripto = []
    var characters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwZxYyZz";
    var characters_s = characters.split("")

    var msg = "pasquini p"
    //separando as letras em um array
    var msg_s = msg.split("")
    console.log(msg_s) 

    for(let i = 0; i<msg_s.length;i++){

        //Adicionando um número random inteiro a array key
        key.push(parseInt(Math.random(10,100) * 100))

        //Adicionando um número random inteiro a array send
        send.push(parseInt(Math.random(10,100) * 100))

        //randomString = characters_s[parseInt(Math.random(0, i+1) * 10)]   

        //multiplica a key e send e adiciona letras maiusculas e minusculas nos resultados das contas
        cripto.push(characters_s[parseInt(Math.random(0, i+1) * 10)] + key[i] * send[i] + characters_s[parseInt(Math.random(0, i+1) * 10)]) 
 
    }
    
    console.log(key, send, cripto, numsStr )

    var numsStr = [] 
    var menssagem = []

    for(let i = 0; i<msg_s.length; i++){
        //tira as letras das contas 
        numsStr.push(cripto[i].replace(/[^0-9]/g,''));
        //console.log(numsStr)

        //transforma o array criptografado e converte em numeros que significam letras
        menssagem[i] = numsStr[i] / key[i]
    }

    console.log(menssagem)
}

