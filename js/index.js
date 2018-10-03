 // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

$(document).ready(function () {

  var randomQuote;
  var randomAuthor;

  getQuote();

  function getQuote() {

    /*    var quotes = ["You don't need much space to have sex.", "Well, everybody has a car, I have two — my wife drives one, I drive one.", "Do you want three meals in a hawker centre, food court or restaurant?", "You talk about bak chor mee. I will say mee siam mai hum.", "The price of chicken may be rising fast, but we can encourage Singaporeans to turn to alternative sources of protein, such as fish.", "If the annual salary of the Minister of Information, Communication and Arts is only $500,000, it may pose some problems when he discuss policies with media CEOs who earn millions of dollars because they need not listen to the minister's ideas and proposals. Hence, a reasonable payout will help to maintain a bit of dignity.", "Every month, when I receive my CPF statement, I feel so rich.", "I work hard, I earn more, my medisave is bigger. You’re lazy, you work less, your medisave is small."];
                           var authors = ["Josephine Teo", "Koh Poh Koon", "Vivian Balakrishnan", "Lee Hsien Loong", "Halimah Yacob", "Lim Wee Kiak", "Lim Swee Say", "Khaw Boon Wan"];
                           
                           randomNum = Math.floor(Math.random()*quotes.length);
                           randomQuote = quotes[randomNum];
                           randomAuthor = authors[randomNum];
                       */
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function (data) {
      $("#text").animate({ fontSize: "0px", opacity: 0.28 }, 800).animate({ fontSize: "18px", opacity: 1 }, 500).text(data.quoteText);
      $("#author").animate({ opacity: 0 }, 0).animate({ opacity: 1 }, 2000).text('- ' + data.quoteAuthor);
      randomQuote = data.quoteText;
      randomAuthor = data.quoteAuthor;

    });




  }

  $("#new-quote").on("click", function () {
    getQuote();
  });


  $("#tweet-quote").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + '"' + randomQuote + '"' + " - " + randomAuthor);
  });


});