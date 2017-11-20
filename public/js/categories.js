
  	$(document).ready(function() 
    {

       $.get("/api/user_data").then(function(data) 
       {
          $(".member-name").text(data.email);
        });

       $.get("/api/categories").done(function(categories) 
      {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) 
     {
      console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

      }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () 
        {
          var id_selector = $(this).attr("id");
          console.log(id_selector);
        //var imgClicked = $(this).data("src");
          try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
      });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });


       $('#btnDelete, #btnDress, #btnTops, #btnBottoms, #btnAccessories, #btnShoes').click(function () {
   if (this.id == 'btnDelete') {
      alert('btnDelete 1 clicked');
      var delid = $(this).children('button').attr("id")

          console.log(delid);
          $.ajax({
            method: "DELETE",
            url: "/api/categories/" + delid
          }).done(function(data) { 
            console.log(data);
            window.location = data
          });

   }
   else if (this.id == 'btnDress') {
      //alert('btnDress 2 clicked');
      $('.hide-bullets').empty();
      $('.carousel-inner').empty();
      $.get("/api/categories/dress").done(function(categories) 
      {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) {
    console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

    }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        console.log(id_selector);
        //var imgClicked = $(this).data("src");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });

   }

   else if (this.id == 'btnTops') {
       //alert('#btnTops 2 clicked');
       $('.hide-bullets').empty();
      $('.carousel-inner').empty();
       $.get("/api/categories/top").done(function(categories) 
      {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) {
    console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

    }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        console.log(id_selector);
        //var imgClicked = $(this).data("src");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });
   }

   else if (this.id == 'btnBottoms') {
       //alert('btnBottoms 2 clicked');
       $('.hide-bullets').empty();
      $('.carousel-inner').empty();
       $.get("/api/categories/bottom").done(function(categories) 
       {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) {
    console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

    }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        console.log(id_selector);
        //var imgClicked = $(this).data("src");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });
   }

   else if (this.id == 'btnAccessories') {
       //alert('btnAccessories 2 clicked');
       $('.hide-bullets').empty();
      $('.carousel-inner').empty();
       $.get("/api/categories/accessories").done(function(categories) 
        {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) {
    console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

    }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        console.log(id_selector);
        //var imgClicked = $(this).data("src");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });
   }

   else if (this.id == 'btnShoes') {
      //alert('#btnShoes 2 clicked');
      $('.hide-bullets').empty();
      $('.carousel-inner').empty();
      $.get("/api/categories/shoes").done(function(categories) 
         {

        console.log(categories);
        console.log(categories.length);
        //console.log(categories.id);

     for(var i=0 ; i< categories.length  ; i++) {
    console.log(i);
      $('.hide-bullets').append('<li class="col-sm-3"><a class="thumbnail" id="carousel-selector-'+i+'"><img src="uploads/'+categories[i].image_url+'" alt="'+categories[i].id+'"></a></li>');

    }

    $('.carousel-inner').html('<div class="active item" data-slide-number="'+0+'"><img src="uploads/'+categories[0].image_url+'"></div>');

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        console.log(id_selector);
        //var imgClicked = $(this).data("src");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            console.log(id);
            console.log(categories[id].image_url);
            console.log(categories[id].id);
            $('.carousel-inner').html('<div class="active item" data-slide-number="'+id+'"><img src="uploads/'+categories[id].image_url+'" alt="'+categories[id].id+'"></div>');
            delid = categories[id].id;
            var delBtn = $('<button>');
            delBtn.attr("id",categories[id].id);
            delBtn.attr("value","Delete");
            delBtn.text("Delete");
            $('#btnDelete').html(delBtn);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
            //alert('hello');
                 var id = $('.item.active').data('slide-number');
                 console.log(id);
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
    });
    }
  });
});

   // window.onload = function (e) {


   // }

        // $('#btnDelete').on('click', function(event)
        // {
          

        // });

      


    // $('#btnDress').on('click', function(evet)
    //     {
      
    // });

    //   $('#btnTops').on('click', function(evet)
    //     {
      
    // });

     //  $('#btnBottoms').on('click', function(evet)
     //    {
       
     // });

      //   $('#btnAccessories').on('click', function(evet)
      //   {
        
      // });

       //  $('#btnShoes').on('click', function(evet)
       //  {
         
      












