// BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})(); // budgetController.publicTest(5) = 23 + 5 = 28
 


// UI CONTROLLER
var UIController = (function() {

    // Some code

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UIctrl) {

    var ctrlAddItem = function() {

        // 1. Get user input data


        // 2. Add the item to the budget controller


        // 3. Add the item to the UI

        
        // 4. Calculate the budget


        // 5. Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController); 