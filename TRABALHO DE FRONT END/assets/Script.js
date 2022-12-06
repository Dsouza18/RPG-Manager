

const btnMobile = document.getElementById('btn-mobile');
const form = document.getElementById('form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// criando menu mobile//

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



//Validação de nome, email e senha///

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0)
  }
  else {
    removeError(0)
  }
}

function emailValidate() {
  if (emailRegex.test(campos[1].value)) {
    setError(1)
  }
  else {
    removeError(1)
  }
}

function mainPasswordValidate() {
  if (campos[2].value.length < 8) {
    setError(2)
  }
  else {
    removeError(2)
    comparePassword()
  }
}

function comparePassword() {
  if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
    removeError(3)
  }
  else {
    setError(3)
  }
}


//Adicionar campo//

function botaoHandler(event){
  event.preventDefault()
}

  var btn_add = document.getElementById('add-form5');
  var form5 = document.getElementById('form5');
  var box5 = document.getElementById('box5');

  var contador 

  btn_add.addEventListener('click',function(){

    createLabel1();
    createInput1();
    createLabel2();
    createInput2();

  });

  //<label for="nome-cenario">Nome:</label>
  function createLabel1(){

    var elemento = document.createElement('label');
    elemento.setAttribute('for', 'nome-cenario');
    elemento.textContent = 'Nome:';
    box5.appendChild(elemento);

  }

  function createLabel2(){

  var elemento2 = document.createElement('label');
  elemento2.setAttribute('for', 'tipo-cenario');
  elemento2.textContent = 'Tipo:';
  box5.appendChild(elemento2);

  }

// <input type="text" name="nome" placeholder="Nome" id="nome-cenario" class="input" /> <br />
  function createInput1(){
   
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'text');
    elemento.setAttribute('placeholder', 'Nome');
    elemento.setAttribute('id', 'nome-cenario');
    elemento.setAttribute('class', 'input');


    box5.appendChild(elemento);

  }

  function createInput2(){

  var elemento2 = document.createElement('input');
  elemento2.setAttribute('type', 'text');
  elemento2.setAttribute('tipo', 'tipo');
  elemento2.setAttribute('placeholder', 'Tipo');
  elemento2.setAttribute('id', 'tipo-cenario');
  elemento2.setAttribute('class', 'input');
  box5.appendChild(elemento2);
  }

