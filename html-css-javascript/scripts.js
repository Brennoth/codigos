let chave = "cb911533cefed60c266eae13605133e3"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src= "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML ="umidade " + dados.main.humidity +"%"

}




function cliqueAqui(){
    let cidade = document.querySelector(".lugar").value
    
    buscarCidade(cidade)
}
async function buscarCidade(cidade){
    
    let dados =await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cb911533cefed60c266eae13605133e3&units=metric").then( (resposta) => resposta.json())
    
    
    colocarNaTela(dados)
}

