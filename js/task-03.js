const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

////////  MAP !!! DONE

const galleryList = document.querySelector(".gallery");

const newGallery = images.map(pic => {
galleryList.insertAdjacentHTML('beforeEnd', `<li><img src="${pic.url}" alt="${pic.alt}" width = 180 height = 130></li></li>`)
})


////////  FOR...OF !!! DONE

// const galleryList1 = document.querySelector(".gallery")
// for (let pic of images) {
//   galleryList.insertAdjacentHTML('beforeEnd', `<li><img src="${pic.url}" alt="${pic.alt}" width = 180 height = 130></li>`)
// }


////////  MAP/APPEND !!!  DONE

// const galleryList = document.querySelector(".gallery");
// const newGallery = images.map(pics => {
//   const newGalleryItem = document.createElement(`li`);
//   const newPics = document.createElement(`img`)

//   newPics.src = pics.url;
//   newPics.alt = pics.alt;
//   newPics.width = 180;
//   newPics.height = 130;

//   newGalleryItem.append(newPics);
//   console.log(newGalleryItem)
//   // console.log(newPics)
  
//   return newGalleryItem
// })

// galleryList.append(...newGallery); //work!!!
// galleryList.insertAdjacentHTML("afterbegin", newGallery);
  
  
////////  REDUCE !!! DONE
// const galleryList = document.querySelector(".gallery");

// const newGalleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 180 height = 130></li>`;
// const newGallery = images.reduce((acc, item) => 
// acc + newGalleryItem(item),
//   ""
// );
// 
// galleryList.insertAdjacentHTML("afterbegin", newGallery);



////////  FOREACH !!! IN PROGRESS

// images.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });
// const galleryList = document.querySelector(".gallery")
// for (let pic in images) {
//   galleryList.insertAdjacentHTML('beforeEnd', `<li><img src="${pic.url}" alt="${pic.alt}" width = 180 height = 130></li>`)
// }
