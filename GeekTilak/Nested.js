const Students = {
    StudentId: 19002,
    name: 'Fred',
    age: 21,
    education: {
        degree: 'Btech',
        diploma: 'Webdevelopment'
    }
};
const { education: { diploma } } = Students;
console.log(diploma);