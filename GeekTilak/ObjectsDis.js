//Program to clone the object and change the property and then iterate the array of objects using inbuilt functions and to console the object property and frame a meaning full sentence.

let Students = {
    Name: "Tialkchnadra",
    fname: "rohitash",
    Mname: "Amarvati",
    class: "Btech",
    prog() {
        console.log(this.class)
    },
    
    gender: "male"

};
Students.prog()
    // Students.forEach(elements);

// function elements(element) {
//     console.log(element);
// }
//console.log(Students[1]);