const router = require("express").Router();
const User = require('../models').User;
const Company = require('../models').Company;
const Comment = require('../models').Comment;

const getAllUsers = (req,res) => {
  User.findAll().then((users) =>{
    res.send(users)}
  )
};

const postNewUser = (req,res)=>{
  console.log("made it")
  User.create({
    name: req.body.name,
    zipcode: req.body.zipcode,
    karmapoints: req.body.karmapoints,
    bio: req.body.bio
    }).then((users) =>{
    console.log('User created!')
    res.send(users)
  })
};

const getSingleUser = (req,res) => {

	User.findById(req.params.id,
		{include: [Comment]}
	).then((review)=>{
		res.send(review)
	})
};

router.route('/')
  .get(getAllUsers)
  .post(postNewUser)

router.route('/:id')
  .get(getSingleUser)

module.exports = router