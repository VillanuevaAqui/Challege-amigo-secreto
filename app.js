// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function getFriends () {

    let friend = document.getElementById("amigo").value;

    if (friend == "" || !isNaN(friend)) {

        alert("Ingrese un nombre porfavor");
    } else {

        amigos.push(friend);
        showFriends();
        document.getElementById("amigo").value = "";

    }
}

function showFriends() {

    const listFriends = document.getElementById("listaAmigos");
    listFriends.innerHTML = "";

    for (let friend of amigos) {

        listFriends.innerHTML += `<li>${friend}</li>`;
    }
}

function randomFriend() {

    console.log(amigos[Math.floor(Math.random() * amigos.length)]);
    const friend = document.getElementById("listaAmigos");
    friend.innerHTML = `<li> El Amigo Secreto es: ${amigos[Math.floor(Math.random() * amigos.length)]}</li>`

    
    return Math.floor(Math.random() * amigos.length);


}



