// These are my variables
var money = 2505;
var cost = 250;
var statement = "I have $" + money;

// Output my cashflow to the user interface
$('.output').text(statement);


var makepurchase = function() {

      if (money > cost) {
        $('.output').html("<p>You have purchased this item.</p>");
        money = money - cost;
      }
      else if (money == cost) {
        $('.output').html("<p>You have exactly enough money.</p>");
        money = money - cost;
      }
      else {
        $('.output').html("<p>You don't have enough money.</p>");
      }

      $('.output').append("<p>You now have: $" + money + "</p>");
};











//end
