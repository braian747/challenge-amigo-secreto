// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert("Por favor, inserte un nombre.") 
    } else if (amigos.includes(amigo)) {
        alert(`El nombre "${amigo}" ya ha sido ingresado.`)
        } else amigos.push(amigo);
    limpiarInput();   
    actualizarLista();

}
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoSecreto = elegirAmigoSecreto();
        asignarTextoPorID('listaAmigos', '');
        let texto = 'El amigo secreto es: ' + amigoSecreto;
        if (amigosSorteados.length == amigos.length) {//si ya se sortearon todos los amigos no mostrar "el amigo secreto es..."
            texto = amigoSecreto;
        }
        asignarTextoPorID('resultado', texto);
    } else asignarTextoPorID('resultado', 'No hay amigos para sortear');
    
}

function elegirAmigoSecreto() {
    let numeroMaximo = amigos.length;
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo); //selecciona aleatoriamente una posicion del array de amigos
    let amigoElegido = amigos[numeroAleatorio];
    //Si ya sorteamos todos los amigos
    if (amigosSorteados.length == numeroMaximo) {
        return('Ya se sortearon todos los amigos posibles');
        
    } else {
        //Si el amigo elegido está incluido en la lista de sorteados vuelve a elegir otro amigo
        if (amigosSorteados.includes(amigoElegido)) {
            return elegirAmigoSecreto();
        } else {
            amigosSorteados.push(amigoElegido);
            return amigoElegido;
        }
    }

}

function asignarTextoPorID(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;

}