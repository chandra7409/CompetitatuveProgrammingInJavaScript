const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

const name = user.personalInfo.name;
const userCity = user.personalInfo.address.city;

const user = {
    id: 101,
    email: 'jack@dev.com'
}

//Now if you try you access the name, you’ll be thrown Cannot read property ‘name’ of undefined.

const name = user.personalInfo.name; // Cannot read property 'name' of undefined