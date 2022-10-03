import { faker } from '@faker-js/faker';

const Articleslist = [
    {   "key": 0,
    "articlename" : faker.company.catchPhrase() ,
    "avatar" : faker.image.avatar(),
    "position" : faker.commerce.productDescription(),
    "name" : faker.name.firstName(),
    },
    {   "key": 1,
    "articlename" : faker.company.catchPhrase() ,
    "avatar" : faker.image.avatar(),
    "position" : faker.commerce.productDescription(),
    "name" : faker.name.firstName(),
    },
    {   "key": 2,
    "articlename" : faker.company.catchPhrase() ,
    "avatar" : faker.image.avatar(),
    "position" : faker.commerce.productDescription(),
    "name" : faker.name.firstName(),
        
    }
    
]
export default Articleslist