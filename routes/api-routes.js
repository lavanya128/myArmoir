// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var multer  = require('multer');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        // var ext = require('path').extname(file.originalname);
        // ext = ext.length>1 ? ext : "." + require('mime').extension(file.mimetype);
        // require('crypto').pseudoRandomBytes(16, function (err, raw) {
        //     cb(null, (err ? undefined : raw.toString('hex') ) + ext);
        // });

        cb(null,file.originalname);
    }
});

var upload = multer({ storage: storage });


module.exports = function(app) {


  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/categories",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId}
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

  app.get("/api/categories/dress",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId,
    dress: true }
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

   app.get("/api/categories/top",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId,
    top: true }
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

    app.get("/api/categories/bottom",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId,
    bottom: true }
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

    app.get("/api/categories/accessories",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId,
    accessories: true }
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

    app.get("/api/categories/shoes",function(req,res) {
    //var id= req.params.id;
     var userId = req.user.id;
    db.Categories.findAll({
      attributes:['image_url', 'id'],
    where: { userId: userId,
    shoes: true }
  }).then(function(dbCategories)
  {
      console.log(dbCategories);
      res.json(dbCategories);
  });
  })

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data",  function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post('/new-category', upload.single('file'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file.path);
    console.log(req.file);
    var userId = req.user.id;
  var image_url;
  if (!req.file) {
    image_url = "./public/uploads/cat.jpg";
  } else {
    image_url = req.file.originalname;
  }
  db.Categories.create({
    top: req.body.top,
      bottom: req.body.bottom,
      dress: req.body.dress,
      socks: req.body.socks,
      shoes: req.body.shoes,
      accessories: req.body.accessories,
      season: req.body.season,
      color: req.body.color,
      emotion: req.body.emotion,
      brand: req.body.brand,
      planner: req.body.planner,
      favorites: req.body.favorites,
      image_url: image_url,
      UserId: userId
  }).then(function(dbCategories) {
    console.log(dbCategories);
    console.log(dbCategories.image_url);
     res.redirect("/categories");
  })
});

  app.delete("/api/categories/:id", function(req, res) {
    db.Categories.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbCategories) {
      console.log(dbCategories);
      res.json('/categories');
    });
  });
    

};
