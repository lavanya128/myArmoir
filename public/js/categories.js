
//   // and updates the HTML on the page
  // $.get("/api/user_data").then(function(data) {
  //   $(".member-name").text(data.email);
  // });

  // $('#checkBtn').click(function() {
  //     var checked = $("input[type=checkbox]:checked").length;

  //     if(!checked) {
  //       alert("You must check at least one checkbox.");
  //       return false;
  //     }

  //   });

  // $("input[type='checkbox'][name='Categories']").change(function() {
  //   $('.btn-default').valid();

  $(document).on("submit", '.signup', function(event)
  {
  	// event.preventDefault();
  	// console.log('hello');
  	// // var checked = $("input[type=checkbox]:checked").length;

   // //    if(!checked) {
   // //      alert("You must check at least one checkbox.");
   // //      return false;
   // //    }
  	// var categories = {
  	// 	//top: 
   //    //top: $('#checkBtn').val();
   //    top: $('#checkBtn1').is(":checked"),
   //    bottom: $('#checkBtn2').is(":checked"),
   //    dress: $('#checkBtn3').is(":checked"),
   //    socks: $('#checkBtn4').is(":checked"),
   //    shoes: $('#checkBtn5').is(":checked"),
   //    accessories: $('#checkBtn6').is(":checked"),
   //    planner: $('#checkBtn6').is(":checked"),
   //    favorites: $('#checkBtn6').is(":checked"),
  	// 	color: $("#color-input").val().trim(),
  	// 	emotion: $("#emotion-input").val().trim(),
  	// 	brand: $("#brand-input").val().trim(),
  	// 	seson_type: $("#season-input").val().trim()
  		
  	// };
  	// console.log(categories); 
   //  $.post('/new-category', categories).done(function(data) {
   //    console.log(data);
   //  });

    });

  	


  

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/categories.html', function (req, res) {
//     res.sendFile( __dirname + "/" + "categories.html" );
// });










