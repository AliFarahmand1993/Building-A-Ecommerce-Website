document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products');
    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < 15; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML += `
       <div class="product bg-gray-200 flex flex-col justify-between rounded-t-lg">
           <img 
           src="${response[i].images[1]}" alt="${response[i].category.name}"
            class="w-full rounded-t-lg">
           <div class="py-4 px-8">
           <h2 class="text-3xl font-bold text-primaryColor mt-2">${title.length > 14 ? title.substring(0, 14).concat(' ...') : title
                    }</h2>
           <h4 class=" text-white bg-primaryColor px-4 py-2 inline-block my-4 rounded-xl hover:text-black hover:bg-lightpink">${response[i].category.name}</h4>
           <p class="text-justify">${description.length > 60
                        ? description.substring(0, 60).concat(' ...more')
                        : description
                    }</p>
           <div class="product-price-container">
               <h3 class="product-price ">$${response[i].price}</h3>
               <a class=" text-white bg-primaryColor px-4 py-2 inline-block my-2 rounded-xl hover:text-black hover:bg-lightpink" href="#">Add to Cart</a>
           </div>
           </div>
          
       </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});

// swiper js
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    // slidesPerView: '2',
    autoplay: {
      enabled: true,
      delay: 1,
    },
  });
