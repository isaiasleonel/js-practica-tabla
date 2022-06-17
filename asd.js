let lista_tareas = [];
let text = document.querySelector('#text');

let btn = document.querySelector('#btn').addEventListener('click', (e) => {
  e.preventDefault();
  //jsn
  let jsn = {
    texto: text.value,
  };
  //condicion

  if (text.value == '' || lista_tareas.length < 3) {
    lista_tareas.push(jsn);
    console.table(lista_tareas);
  } else {
    alert(' supero limite');
  }
  //mostrar

  mostrar();
});

function mostrar() {
  let lista = document.querySelector('#lista');
  lista.innerHTML = '';
  for (const i of lista_tareas) {
    lista.innerHTML += `
        <li>${i.text}</li>`;
  }
  console.log(text.value);
}
