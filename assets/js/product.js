
var ImageData;
window.onload = function() {
  displayDynamicCollectionPage('/Gallery/TheIridescentProduct');
  };

async function fetchData(Data) {
    const foacsonline = new FoacsOnline();
    var Url = foacsonline.apiUrl + Data; // Use the passed galleryName here
    try {
        const response = await axios.get(Url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
async function displayDynamicCollectionPage(Data) {
    
    try {
        ImageData = await fetchData(Data);
        const main_div = document.getElementById("image_data");
 
        ImageData.forEach(item =>{
          const each_image_div = document.createElement('div');
            each_image_div.classList.add('col-lg-4');
            each_image_div.classList.add('col-sm-6');
            each_image_div.classList.add('mb--40');
            each_image_div.classList.add('mb-md--30');
            const irid_product = document.createElement('div');
            irid_product.classList.add('irid-product');
            const product_inner = document.createElement('div');
            product_inner.classList.add('product-inner');
            const product_image = document.createElement('figure');
            product_image.classList.add('product-image');
            const product_image_holder = document.createElement('div');
            product_image_holder.classList.add('product-image--holder');
            const a_img = document.createElement('a');
            const img_pre = document.createElement('img');
            img_pre.classList.add('primary-image');
            img_pre.src = item.Image_link_pre;
            const img_post = document.createElement('img');
            img_post.classList.add('secondary-image');
            img_post.src = item.Image_link_post;
            a_img.appendChild(img_pre);
            a_img.appendChild(img_post);
            product_image_holder.appendChild(a_img);
            product_image.appendChild(product_image_holder);

            const product_badge_sale = document.createElement('span');
            product_badge_sale.classList.add('product-badge');
            product_badge_sale.classList.add('sale');
            product_badge_sale.textContent = item.Badge;
            product_image.appendChild(product_badge_sale);

            const product_info = document.createElement('div');
            product_info.classList.add('product-info');
            const product_title = document.createElement('h3');
            product_title.classList.add('product-title');
            const product_info_a = document.createElement('a');
            product_info_a.textContent = item.Description;
            const product_price_wrapper = document.createElement('span');
            product_price_wrapper.classList.add('product-price-wrapper');
            const money = document.createElement('span');
            money.classList.add('money');
            money.textContent = item.Rate;
            const product_price_old = document.createElement('span');
            product_price_old.classList.add('product-price-old');
            const money_old = document.createElement('span');
            money_old.classList.add('money');
            money_old.textContent = item.Rate_Old;
            product_title.appendChild(product_info_a);
            product_info.appendChild(product_title);
            product_price_old.appendChild(money_old);
            product_price_wrapper.appendChild(money);
            product_price_wrapper.appendChild(product_price_old);
            product_info.appendChild(product_price_wrapper);
            product_inner.appendChild(product_image);
            product_inner.appendChild(product_info);
            irid_product.appendChild(product_inner);
            each_image_div.appendChild(irid_product);
            main_div.appendChild(each_image_div);

      })
  } catch (error) {
    // Handle the error here
    console.error("An error occurred:", error);
  }
}