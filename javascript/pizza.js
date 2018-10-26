        // START CREATE YOUR PIZZA //
        // Start Show all menu items 
            filterSelection("all")
        function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
        }
        // End Show all menu items 

        
        // Start show filtered menu items //
        function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            }
        }
        }
        // End show filtered menu items //

        // Start hide menu items that are not selected //
        function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1); 
            }
        }
        element.className = arr1.join(" ");
        }
        // End hide menu items that are not selected //
        // END CREATE YOUR PIZZA //


        // START PASSING MENU ITEMS DOWN

        // PASSES PIZZA SIZE AND CREATES RECEIPT
        function getReceipt() {
            var text1 = "<h3>You ordered: </h3>";
            var runningTotal = 0;
            var sizeTotal = 0;
            var sizeArray = document.getElementsByClassName("size");

            // Get the size value and add it to the string
            for (var i = 0; i < sizeArray.length; i++) {
                if (sizeArray[i].checked) {
                    var selectedSize = sizeArray[i].value;
                    text1 = text1+selectedSize+"<br>";
                }
            }

            // Link the size value with the price
            if (selectedSize === "Personal Pizza") {
                sizeTotal = 6;
            }   
            else if (selectedSize === "Medium Pizza") {
                sizeTotal = 10;
            }
            else if (selectedSize === "Large Pizza") {
                sizeTotal = 14;
            }
            else if (selectedSize === "Extra Large Pizza") {
                sizeTotal = 16;
            }

            

            // Add sizeTotal's value to runningTotal
            runningTotal = sizeTotal;

            // Dev tests
            console.log("START of SIZE");
            console.log(selectedSize+" = $" + sizeTotal + ".00");
            console.log("size text1: " + text1);
            console.log("subtotal: $" + runningTotal + ".00");
            console.log("END of SIZE");

            // Call next function in the series and pass along variables
            getMeat(runningTotal,text1);
        };

        // PASSES MEAT DOWN
        function getMeat(runningTotal,text1) {
            var meatTotal = 0;
            var selectedMeat = [];
            var meatArray = document.getElementsByClassName("meat");
            console.log("START of MEAT");

            // Iterate through the meat array
            for (var j = 0; j <meatArray.length; j++) {
                if (meatArray[j].checked) {
                    selectedMeat.push(meatArray[j].value);
                    console.log("selected meat item: " + meatArray[j].value + "");
                    text1 = text1+meatArray[j].value+"<br>";
                }
            }

            // Add selected meat options to text1
            var meatCount = selectedMeat.length;

            // Set the meat costs
            if (meatCount > 1) {
                meatTotal = (meatCount -1);
            }
            else {
                meatTotal = 0
            }

            // Add meat options to total
            runningTotal = (runningTotal + meatTotal);
            console.log("total selected meat items: " + meatCount);
            console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
            console.log("meat text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of MEAT");

            // Call next function in the series and pass along variables
            getVeg(runningTotal,text1);
        };

        // PASSES VEG DOWN
        function getVeg(runningTotal,text1) {
            var vegTotal = 0;
            var selectedVeg = [];
            var vegArray = document.getElementsByClassName("veggies");
            console.log("START of VEG");

            // Iterate through the veg array
            for (var k = 0; k <vegArray.length; k++) {
                if (vegArray[k].checked) {
                    selectedVeg.push(vegArray[k].value);
                    console.log("selected veg items: " + vegArray[k].value +"");
                    text1 = text1+vegArray[k].value+"<br>";
                }
            }

            // Add selected veg options to text1
            var vegCount = selectedVeg.length;
            if (vegCount > 1) {
                vegTotal = (vegCount -1);
            }
            else {
                vegTotal = 0
            }

            // Add veg options to total
            runningTotal = (runningTotal + vegTotal);
            console.log("total selected veg items: " + vegCount);
            console.log(vegCount + " veg - 1 free veg = " + "$" + vegTotal + "0.00");
            console.log("veg text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of VEG");

            // Call next function in the series and pass along variables
            getCheese(runningTotal,text1);
        }

        // PASSES CHEESE DOWN
        function getCheese(runningTotal,text1) {
            var cheeseTotal = 0;
            var selectedCheese = [];
            var cheeseArray = document.getElementsByClassName("cheeses");

            // Get the cheese value and add it to the string
            for (var l = 0; l <cheeseArray.length; l++) {
                if (cheeseArray[l].checked) {
                    var selectedCheese = cheeseArray[l].value;
                    console.log("START of CHEESE");
                    console.log("selected cheese items: " + cheeseArray[l].value + "");
                    text1 = text1+cheeseArray[l].value+"<br>";
                }
            }

            // Add selected cheese to text1
            var cheeseCount = selectedCheese.length;

            // Link the cheese value with the price
            if (selectedCheese === "Mozzarella Cheese") {
                cheeseTotal = 0;
            }   
            else if (selectedCheese === "Extra Mozzarella") {
                cheeseTotal = 3;
            }

            // Add cheese options to total
            runningTotal = (runningTotal + cheeseTotal);
            console.log("cheese value: " + cheeseTotal);
            console.log("cheese text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of CHEESE");

            // Call next function in the series and pass along variables
            getSauce(runningTotal,text1);
        }

        // PASSES SAUCES DOWN
        function getSauce(runningTotal,text1) {
            var sauceArray = document.getElementsByClassName("sauces");
            console.log("START of SAUCE")
            
            for (var l = 0; l <sauceArray.length; l++) {
                if (sauceArray[l].checked) {
                    var selectedSauce = sauceArray[l].value;
                }
            }
            

            // Add selected sauce to text1
            text1 = text1+selectedSauce+"<br>";

            // Add sauce options to total
            console.log("Selected Sauce: " + selectedSauce);
            console.log("sauce text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of SAUCE");
            
            // Call next function in the series and pass along variables
            getCrust(runningTotal,text1);
        }

        // PASS CRUST DOWN
        function getCrust(runningTotal,text1) {
            var crustTotal = 0;
            var selectedCrust = [];
            var crustArray = document.getElementsByClassName("crusts");

            // Get the crust value and add it to the string
            for (var m = 0; m <crustArray.length; m++) {
                if (crustArray[m].checked) {
                    var selectedCrust = crustArray[m].value;
                    console.log("START of CRUST");
                    console.log("selected crust items: " + crustArray[m].value + "");
                    text1 = text1+crustArray[m].value+"<br>";
                }
            }

            // Add selected crust to text1
            var crustCount = selectedCrust.length;

            // Link the cheese value with the price
            if (selectedCrust === "Cheese Stuffed Crust") {
                crustTotal = 3;
            }   
            else {
                cheeseTotal = 0;
            }

            // Add crust options to total
            runningTotal = (runningTotal + crustTotal);
            console.log("crust value: " + crustTotal);
            console.log("crust text1: " + text1);
            console.log("Purchase Total: " + "$" + runningTotal + ".00");
            console.log("END of CRUST");
            document.getElementById("disappearing-text").innerHTML = "";
            document.getElementById("showText1").innerHTML = "<strong>She's a beauty, if I do say so myself.</strong>";
            document.getElementById("showText2").innerHTML = text1;
            document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal + ".00" + "</strong></h3>";

        }

        // END PASSING MENU ITEMS DOWN

        // This code clears the form selections to their defaults and then sets the 
        // corresponding div's CSS opacity to 0, effectively hiding it from view.
        function clearAll() {
            document.getElementById("disappearing-text").innerHTML = "<h4>Oops! Try building a pizza first.</h4>";
            document.getElementById("frmMenu").reset();
            document.getElementById("showText1").innerHTML = "";
            document.getElementById("showText2").innerHTML = "";
            document.getElementById("totalPrice").innerHTML = "";
        };