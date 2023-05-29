// console.log("Hello Word!");
const salir = document.querySelector("#salir");
const ingresar = document.querySelector("#ingresar");
const chat = document.querySelector("#chat");
const form = document.querySelector("#form");
const enviar = document.querySelector("#enviar");
const msgInicio = document.querySelector("#msgInicio");
const template = document.querySelector("#template");

/// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDouBQT5MLRGY6Ben3lrp1kcIgRrcddC4I",
  authDomain: "fir-chat-9dcf3.firebaseapp.com",
  projectId: "fir-chat-9dcf3",
  storageBucket: "fir-chat-9dcf3.appspot.com",
  messagingSenderId: "143441295752",
  appId: "1:143441295752:web:36c51b54955c5d4603e23d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
const show = (elemento) => {
  elemento.classList.remove("d-none");
};
const hide = (elemento) => {
  elemento.classList.add("d-none");
};

let unsubscribe;

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Existe el usuario!😍", user);
    // const uid = user.uid;
    show(salir);
    show(form);
    show(chat);
    hide(ingresar);
    hide(msgInicio);
    const q = query(collection(db, "chat"), orderBy("fecha"));
    chat.innerHTML = "";
    unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("Nova mensagens: ", change.doc.data());
          const clone = template.content.cloneNode(true);
          console.log(clone.querySelector("div"));
          clone.querySelector("span").textContent = change.doc.data().msg;
          if (user.uid === change.doc.data().uid) {
            clone.querySelector("span").classList.add("bg-success");
            clone.querySelector("div").classList.add("text-start");
          } else {
            clone.querySelector("span").classList.add("bg-secondary");
            clone.querySelector("div").classList.add("text-end");
          }
          chat.append(clone);
        }
        //   if (change.type === "modified") {
        //     console.log("Modified city: ", change.doc.data());
        //   }
        //   if (change.type === "removed") {
        //     console.log("Removed city: ", change.doc.data());
        //   }
        chat.scrollTop = chat.scrollHeight;
      });
    });
  } else {
    console.log("No existe el usuario😑");
    show(ingresar);
    show(msgInicio);
    hide(salir);
    hide(form);
    hide(chat);

    if (unsubscribe) {
      unsubscribe();
    }
  }
});

ingresar.addEventListener("click", async () => {
  //   console.log("me deste click");
  try {
    const ingresarResult = await signInWithPopup(auth, provider);
    console.log(ingresarResult);
  } catch (error) {
    console.log(error);
  }
});

salir.addEventListener("click", async () => {
  signOut(auth);
  console.log("El usuario salio de la sesion😥");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form.msg.value.trim()) {
    form.msg.value = "";
    form.msg.focus();
    return console.log("Por favor escribe una mensaje");
  }
  try {
    enviar.disabled = true;
    console.log(form.msg.value);
    console.log("Mensaje enviada😁");
    await addDoc(collection(db, "chat"), {
      msg: form.msg.value.trim(),
      uid: auth.currentUser.uid,
      fecha: new Date(),
    });
    form.msg.value = "";
  } catch (error) {
    console.log(error, "No se envio la mensaje😥");
  } finally {
    enviar.disabled = false;
  }
});
