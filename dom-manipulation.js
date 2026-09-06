// const newElement = document.createElement("h2");
// newElement.textContent = "Welcome Coders!";
// newElement.id = "second";
// newElement.style = "color:white";

// const element = document.getElementById("first");
// element.after(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Diwali is coming";
// newElement2.id = "third";

// className is not recommended because we have to take care of space , you can see the below example
// newElement2.className = "diwali";
// newElement2.className += " holi";

// newElement2.classList.add("diwali");
// newElement2.classList.add("holi");
// newElement2.classList.remove("holi");

// newElement2.style.backgroundColor = "pink";
// newElement2.style.color = "white";
// newElement2.style.fontSize = "20px";
// newElement2.setAttribute("hello", "Ji");

// const element2 = document.getElementById("second");
// element2.after(newElement2);
// element.before(newElement2)

// to know about the attributes

// console.log(newElement2.getAttribute("class"));
// console.log(newElement2.getAttribute("hello"))

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Halwa";

// const list4 = document.createElement("li");
// list4.textContent = "Panner";

// const unorderedElement = document.getElementById("listing");
// unorderedElement.append(list,list2);
// unorderedElement.append(list2);
// unorderedElement.prepend(list3);

// list.after(list4);

// to insert in the middle
// unorderedElement.children[1].after(list4);

const arr = ["Milk", "Halwa", "Panner", "Tofu", "Cake"];

const unorderedElement = document.getElementById("listing");
const fragement = document.createDocumentFragment();

// with the help of fragement UI will not render again and again (Optimized approach)

for (let food of arr) {
  const list = document.createElement("li");
  list.textContent = food;
  fragement.append(list);
}
unorderedElement.append(fragement);

const s1 = document.getElementById("first");
s1.remove();
