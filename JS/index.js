// fetching main api
// let fetchSort = [];
const fetchUiDetails = () => {
    URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch (URL)
    .then((res) => res.json())
    .then((data) =>{ 
      // fetchSort = data.data;
      showCardDetails(data.data)});
}
// showing main details

const showCardDetails = (details) =>{
    document.getElementById('spinner').classList.add('hidden');
      const cardContainer = document.getElementById('card-container');
      details.tools.forEach(singleCard => {
        const { name, image , published_in , features , id } = singleCard;
        const div = document.createElement("div");
        div.classList.add("card", "w-full", "bg-base-100", "shadow-2xl");
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
 
  console.log(btnDetails);
  const modalContainer = document.getElementById('modal-open');
    const{ tool_name , description , image_link , input_output_examples , features , pricing, integrations , accuracy} = btnDetails;
    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
    <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>  
             <div class="flex gap-5 p-5">
             <div>
              <div class="card w-full bg-base-100 shadow-xl">
              <h3 class="text-lg font-bold px-5 pt-10">
              ${description}
            </h3>

            <div class = "flex justify-between">
            <div>
            <p>${pricing[0].plan}<p>
            <p>${pricing[0].price}<p>
            </div>
            <div>
            <p>${pricing[1].plan}<p>
            <p>${pricing[1].price}<p>
            </div>
            <div>
            <p>${pricing[2].plan}<p>
            <p>${pricing[2].price}<p>
            </div>
            <div>

            </div>
           </div>
           <div>
            <div class="card w-full bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${image_link[0]}" alt="..." class="rounded-xl">
    <span class ="btn btn-error">${accuracy.score} %Accuracy</span>
  </figure>
  <div class="card-body items-center text-center">
    <p class="text-xl font-bold">${input_output_examples[0].input}</p>
    <p>${input_output_examples[0].output}</p>
    </div>
  </div>
</div>
</div>
</div>
    `
    modalContainer.appendChild(div);
   ;
  
}

const sortCard = () =>{
  
}

showCardDetails();


