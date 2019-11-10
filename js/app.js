var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a; 
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})(); // budgetController.publicTest(5) = 23 + 5 = 28


var UIController = (function() {

    // Some code

})();


var controller = (function(budgetCtrl, UIctrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController); // controller.anotherPublic() = 28