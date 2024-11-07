
const modal_clinicas= document.getElementById("modal-clinicas")

const OpenModal = ()=>{

   modal_clinicas.classList.add('flex')

}

const FecharModal = () =>{
    modal_clinicas.classList.remove('flex')
}



const id_list_menu_principal = document.getElementById("list-menu-principal");

const list_menu_principal = [
    {
        "class": " text-center p-2 bg-white border-gray-300 border-2 hover:bg-pink-600 hover:text-white text-pink-400  h- border rounded-[20rem] cursor-pointer w-[90%]",
        "item_name": "F. de Pré Cadastro",
        "link": "https://form.jotform.com/243107544269660",
    },
    {
        "class": " text-center p-2 bg-white border-gray-300 border-2 hover:bg-pink-600 hover:text-white text-pink-400  h- border rounded-[20rem] cursor-pointer w-[90%]",
        "item_name": "Maceió",
        "link": "https://wa.me/5582988287425?text=Ol%C3%A1+Nutri+Regina+Britto%2C+vim+pelo+seu+link+e+quero+agendar+uma+consulta%21",
    },
    {
        "class": " text-center p-2 bg-white border-gray-300 border-2 hover:bg-pink-600 hover:text-white text-pink-400  h- border rounded-[20rem] cursor-pointer w-[90%]",
        "item_name": "Piranhas",
        "link": "https://wa.me/5582988287425?text=Ol%C3%A1+Nutri+Regina+Britto%2C+vim+pelo+seu+link+e+quero+agendar+uma+consulta%21",
    },
    {
        "class": " text-center p-2 bg-white border-gray-300 border-2 hover:bg-pink-600 hover:text-white text-pink-400  h- border rounded-[20rem] cursor-pointer w-[90%]",
        "item_name": "Clínicas",
        "onclick": "OpenModal()"
    },

   
];

list_menu_principal.map((item) => {
    if (item.item_name === "Clínicas") {
        id_list_menu_principal.innerHTML += `<li class="${item.class}" onclick="${item.onclick}"><a href="#">${item.item_name}</a></li>`;
    } else {
        id_list_menu_principal.innerHTML += `<li class="${item.class}"><a href="${item.link}">${item.item_name}</a></li>`;
    }
});

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }