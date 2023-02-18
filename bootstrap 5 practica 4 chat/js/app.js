console.log("Funciona!");

const nombreUsuario = document.querySelector('#nombreUsuario');
const btnIngreso = document.querySelector('#btnIngreso');
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
const contenidoWeb = document.querySelector('#contenidoWeb');
const formulario = document.querySelector('#formulario');
const texto = document.querySelector('#texto');


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        nombreUsuario.innerHTML = user.displayName
        accionCerrarSesion()
        contenidoChat(user)
    } else {
        accionAcceder()
        console.log('usuario no registrado')
        nombreUsuario.innerHTML = 'Chat'
        contenidoWeb.innerHTML = /*html*/`
            <p class="lead mt-5 text-center">Debes iniciar sesión</p>
        `
    }
})

const accionCerrarSesion = () => {
    formulario.classList.remove('d-none')
    btnCerrarSesion.addEventListener('click', () => firebase.auth().signOut())
}

const accionAcceder = () => {
    formulario.classList.add('d-none')
    btnIngreso.addEventListener('click', async () => {
        console.log('entro')
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })
}

const contenidoChat = user => {

    formulario.addEventListener('submit', event => {
        event.preventDefault()
        console.log(texto.value)
        if (!texto.value.trim()) {
            console.log('texto vacio')
            return
        }
        firebase.firestore().collection('chat').add({
            texto: texto.value,
            uid: user.uid,
            fecha: Date.now()
        }).then(res => {
            console.log('texto agregado')
        })
        texto.value = ''
    })

    firebase.firestore().collection('chat').orderBy('fecha')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log(change.doc.data());
                    console.log(user.uid)
                    console.log(change.doc.data().uid)
                    if (user.uid === change.doc.data().uid) {
                        console.log('entró', change.doc.data().texto)
                        contenidoWeb.innerHTML += /*html*/`
                        <div class="text-end">
                            <span class="badge badge bg-info">
                                ${change.doc.data().texto}
                            </span>
                        </div>
                        `
                    } else {
                        contenidoWeb.innerHTML += /*html*/`
                        <div class="text-start">
                            <span class="badge bg-secondary">${change.doc.data().texto}</span>
                        </div>
                        `
                    }
                    contenidoWeb.scrollTop = contenidoWeb.scrollHeight
                }
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data());
                }
            });
        })
}