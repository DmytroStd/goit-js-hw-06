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

const galleryList = document.querySelector(".gallery");

const newGallery = images.map(pics => {
  
  const newGalleryItem = ({ url, alt }) =>   
    `<li><img src="${url}" alt="${alt}" width = 180 height = 130></li>`; 
  // const newPic = document.createElement(`img`)
  // // newPic.src = pics;
  // // newGalleryItem.append(newPic)
  // return newGalleryItem + newPic
})
galleryList.insertAdjacentHTML("afterbegin", newGallery);
console.log(galleryList)

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


// const createGalleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 180 height = 130></li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList = document.querySelector("#gallery");
// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
// galleryList.setAttribute("style", "list-style-type:none; display: flex;");