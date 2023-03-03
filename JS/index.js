// fetching main api
const fetchUiDetails = () => {
    URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch (URL)
    .then((res) => res.json())
    .then((data) => showCardDetails(data.data));
}
// showing main details

const showCardDetails = (data) =>{
    document.getElementById('spinner').classList.add('hidden');
      const cardContainer = document.getElementById('card-container');
      data.tools.slice(0 , 6).forEach(singleCard => {
        const { name, description , image , published_in , features , id } = singleCard;
        const div = document.createElement("div");
        div.classList.add("card", "w-full", "bg-base-100", "shadow-xl");
        div.innerHTML = `
        <figure class="px-10 pt-10">
                  <img src="${image}" alt="..." class="rounded-xl" />
                </figure>
                <div class="card-body">
                  <h2 class="font-bold text-2xl">Features</h2>
                  ${features}
                  <div class="flex justify-between">
                  <div>
                  <p class="font-bold text-2xl mt-10">${name}</p>
                  <div class="flex gap-2 mt-2">
                  <i class="fa-solid fa-calendar-days mt-1"></i>
                  <p>${published_in}</p>
                  </div>
                  </div>
                  <div class="mt-16">
                  <label for="my-modal-3" class="btn btn-error rounded-3xl w-12 h-12 hover:bg-cyan-500 animate-bounce" onclick="fetchBtnDetails('${id}')"><i class="fa-solid fa-arrow-right"></i></label>
                  </div>           
              `;
        cardContainer.appendChild(div);
      });
};


const fetchBtnDetails = id =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => showBtnDetails(data.data));
}
const showBtnDetails = btnDetails =>{
         
}

showCardDetails();


