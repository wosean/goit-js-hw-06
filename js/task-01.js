const elementsCategories = document.getElementById('categories');
console.log(`Number of categories: ${elementsCategories.children.length}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
  });