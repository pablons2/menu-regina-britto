const modal_clinicas = document.getElementById('modal-clinicas')

const OpenModal = () => {
  modal_clinicas.classList.add('flex')
}

const FecharModal = () => {
  modal_clinicas.classList.remove('flex')
}

const id_list_menu_principal = document.getElementById('list-menu-principal')

const list_menu_principal = [
  {
    class:
      ' bg-[#f8d9de] text-[#5e2c35] font-medium py-4 rounded-full shadow-sm transition hover:brightness-95 w-[90%]  cursor-pointer',
    item_name: 'Formulário Pré Cadastro',
    link: 'https://form.jotform.com/243107544269660',
  },
  {
    class:
      'bg-[#c9d7b5] text-[#374030] font-medium py-4 rounded-full shadow-sm transition hover:brightness-95 w-[90%]  cursor-pointer',
    item_name: 'Maceió',
    link: 'https://wa.me/5582988287425?text=Ol%C3%A1+Nutri+Regina+Britto%2C+vim+pelo+seu+link+e+quero+agendar+uma+consulta%21',
  },
  {
    class:
      'bg-[#c9d7b5] text-[#374030] font-medium py-4 rounded-full shadow-sm transition hover:brightness-95 w-[90%]  cursor-pointer',
    item_name: 'Piranhas',
    link: 'https://wa.me/5582988287425?text=Ol%C3%A1+Nutri+Regina+Britto%2C+vim+pelo+seu+link+e+quero+agendar+uma+consulta%21',
  },
  {
    class:
      'bg-[#c9d7b5] text-[#374030] font-medium py-4 rounded-full shadow-sm transition hover:brightness-95 w-[90%]  cursor-pointer',
    item_name: 'Clínicas',
    onclick: 'OpenModal()',
  },
]

list_menu_principal.map((item) => {
  if (item.item_name === 'Clínicas') {
    id_list_menu_principal.innerHTML += `<li class="${item.class}" onclick="${item.onclick}"><a href="#">${item.item_name}</a></li>`
  } else {
    id_list_menu_principal.innerHTML += `<li class="${item.class}"><a href="${item.link}">${item.item_name}</a></li>`
  }
})

// Open and close sidebar
function openNav() {
  document.getElementById('mySidebar').style.width = '60%'
  document.getElementById('mySidebar').style.display = 'block'
}

function closeNav() {
  document.getElementById('mySidebar').style.display = 'none'
}
