
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
        "class": "text-center p-4 bg-white border-pink-600 border-2 hover:bg-pink-600 hover:text-white text-pink-600  border rounded-xl cursor-pointer",
        "item_name": "Agende Agora",
        "link": "https://wa.me/5582988287425?text=Ol%C3%A1+Nutri+Regina+Britto%2C+vim+pelo+seu+link+e+quero+agendar+uma+consulta%21",
    },
    {
        "class": "text-center p-4 bg-white border-pink-600 border-2 hover:bg-pink-600 hover:text-white text-pink-600  border rounded-xl cursor-pointer",
        "item_name": "Clínicas",
        "onclick": "OpenModal()"
    },
    {
        "class": "text-center p-4 bg-white border-pink-600 border-2 hover:bg-pink-600 hover:text-white text-pink-600  border rounded-xl cursor-pointer",
        "item_name": "Web Site",
        "link": "/web_site.html"
    }
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