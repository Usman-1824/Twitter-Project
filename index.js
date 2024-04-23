$("#btn").click(function(){

    $(".container").slideDown("slow")

})
// $("#b").click(function(){


//     $("#child2").children("#b").animate({rotate:"60deg"})

// })
$(document).ready(function() {
    $('.nav-item').click(function() {
      var index = $(this).data('index');
      showData(index);
    });
  });
  
  function showData(index) {
    var displayDiv = $('.display-div');
    
    // Clear previous content
    displayDiv.empty();
    
    // Add new content based on index
    switch(index) {
      case 1:
        displayDiv.append('<h4>News Trending</h4>');
        displayDiv.append('<h3>#BreakingNews</h3>');
        displayDiv.append('12.8k Posts');
        
        displayDiv.append('<h4>Boxing Trending</h4>');
        displayDiv.append('<h3>Rayan Gercia</h3>');
        displayDiv.append('Trending with #HoneyGercia,Devin Haney');
        displayDiv.append('<h4>Sports Trending</h4>');
        displayDiv.append('<h3>T20 World Cup</h3>');
        displayDiv.append('11.3k Posts');
        displayDiv.append('<h4>Trending in Pakistan</h4>');
        displayDiv.append('<h3>Imran Khan PTI</h3>');
        displayDiv.append('1.5M Posts');
        break;
      case 2:
        displayDiv.append('<h2>Data for Item 2</h2>');
        displayDiv.append('<p>This is the data for Item 2.</p>');
        displayDiv.append('<img src="image2.jpg" alt="Image 2">');
        break;
      case 3:
        displayDiv.append('<h2>Data for Item 3</h2>');
        displayDiv.append('<p>This is the data for Item 3.</p>');
        displayDiv.append('<img src="image3.jpg" alt="Image 3">');
        break;
      case 4:
        displayDiv.append('<h2>Data for Item 4</h2>');
        displayDiv.append('<p>This is the data for Item 4.</p>');
        displayDiv.append('<img src="image4.jpg" alt="Image 4">');
        break;
      case 5:
        displayDiv.append('<h2>Data for Item 5</h2>');
        displayDiv.append('<p>This is the data for Item 5.</p>');
        displayDiv.append('<img src="image5.jpg" alt="Image 5">');
        break;
      default:
        displayDiv.text('No data available');
    }
  }