// console.log("funciona!");

//promesas

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

// const findPosts = (id, callBack) => {
//   const post = posts.find((item) => item.id === id);
//   //tratar errores
//   if (post) {
//     callBack(null, post);
//   } else {
//     callBack("No se encontro el post con id " + id);
//   }
// };

//invocar função sem tratar erros
// findPosts(1, (post) => console.log("primeiro ", post));
//invocar função tratando los errores
// findPosts(1, (err, post) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(post);
// });

//callback hell

// findPosts(1, (err, post) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log(post);
//   findPosts(2, (err, post) => {
//     if (err) {
//       return console.log(err);
//     }

//     console.log(post);
//     findPosts(3, (err, post) => {
//       if (err) {
//         return console.log(err);
//       }

//       console.log(post);
//       findPosts(4, (err, post) => {
//         if (err) {
//           return console.log(err);
//         }

//         console.log(post);
//       });
//     });
//   });
// });

//uso de promises

// const findPosts = (id) => {
//   const post = posts.find((item) => item.id === id);
//   return new Promise((resolve, reject) => {
//     if (post) {
//       resolve(post);
//     } else {
//       reject("No se encontro el post con id " + id);
//     }
//   });
// };

// findPosts(0)
//   .then((post) => console.log(post))
//   .catch((e) => console.log(e));

//promises aninhadas

// const findPosts = (id) => {
//   const post = posts.find((item) => item.id === id);
//   return new Promise((resolve, reject) => {
//     if (post) {
//       resolve(post);
//     } else {
//       reject("No se encontro el post con id " + id);
//     }
//   });
// };

// findPosts(1)
//   .then((post) => {
//     console.log(post);
//     return findPosts(2);
//   })
//   .then((post) => {
//     console.log(post);
//     return findPosts(3);
//   })
//   .then((post) => {
//     console.log(post);
//     return findPosts(4);
//   })
//   .catch((e) => console.log(e));

//async await

const findPosts = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((item) => item.id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No se encontro el post con id " + id);
      }
    }, 2000);
  });
};

// retorno sem async await

// findPosts(1)
//   .then((post) => {
//     console.log(post);
//     return findPosts(2);
//   })
//   .then((post) => console.log(post))
//   .catch((e) => console.log(e));

// com async await

const buscar = async (id) => {
  //sem tratativa de erros

  // const post = await findPosts(id);
  // console.log(post);

  //com tratativa de erros
  // try {
  //   const post = await findPosts(id);
  //   console.log(post);
  // } catch (error) {
  //   console.log(error);
  // }

  // uso de promise.all
  try {
    const ArrayPost = await Promise.all([findPosts(1), findPosts(2)]); //as duas promises dever ser verdadeiras neste caso
    // const ArrayPost = await Promise.all([findPosts(4), findPosts(2)]); //um promise falsa devolve o catch quando se usa Promise.all
    console.log(ArrayPost);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Código Finalizado");
  }
};

// buscar(1);
// buscar(4);

//uso do try e catch
buscar();

console.log("Fin do código!");
