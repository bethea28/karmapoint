const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;
const db = require('../models').sequelize;

let users = [
  {name: 'Bryan', zipcode: 11210, karmapoints: 500},
  {name: 'Carlos', zipcode: 11016, karmapoints: 1000},
  {name: 'Jon', zipcode: 10002, karmapoints: 400},
  {name: 'Jung', zipcode: 11102, karmapoints: 400}
]

let comments = [
  {UserId:1, CompanyId:1, comments: 'Bryan is an exceptional worker, who strives to be the very best that no one ever was.', date: 2016-12-06, task: 'designated food caterer'},
  {UserId:2, CompanyId:1, comments: 'Carlos has exceptional communication skills with customers of diverse backgrounds', date: 2016-10-06, task: 'food transporter'},
  {UserId:3, CompanyId:2, comments: 'Jon is exceptionally helpful and dedicated to our cause', date: 2016-07-15, task: 'food server'},
  {UserId:4, CompanyId:3, comments: 'Jung is a hard worker and is dedicated to our cause', date: 2015-12-12, task:'storage operations'}
]

let company = [
  {name: 'The Cecil' , address: '243 West 30th street, 2nd Floor', latitude: 40.749336, longitude: -73.993914},
  {name: 'Food Pantries Program', address: '450 7Th Avenue', latitude: 40.7514675, longitude:-73.9905644},
  {name: 'The Sylvia Rivera Food Pantry', address: '446 West 36th Street', latitude:40.75533, longitude:-73.997514}
]

db.sync({force: true})
.then(() => User.bulkCreate(users))
.then(() => Company.bulkCreate(company))
.then(() => Comment.bulkCreate(comments))
