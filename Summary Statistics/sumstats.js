function start(){
    var numbers = 0;

    // User input for how many numbers will be used in the calculation
    while (numbers < 5){
        numbers = readInt("How many data points do you have (at least 5) ? ");
    }

    // Empty array to store scores
    var scores = [];

    // Asks which type of data the user wants
    var type = readLine("Will you enter only integer values or will floats (decimals) be included? ");

    // Control structure for the determination
    if (type == "integer"){
        var identifier1 = true;
        userInputInserter(numbers, scores, identifier1);
    } else {
        var identifier2 = false;
        userInputInserter(numbers, scores, identifier2);
    }

    // Sorts the array from least to greatest
    scores.sort( function(a , b){
        if(a > b) return 1;
        if(a < b) return -1;
    return 0;
    });
    
    // Displays data
    println();
    println("Organized Data: " + scores);
    println();
    println("Summary Statistics: ");
    summarystatistics(scores);
}

/* Contains multiple helper functions to help calculate and display various statistics*/
function summarystatistics(arr){
    println("Minimum = " + minimum(arr));
    println("Maximum = " + maximum(arr));
    println("Median = " + median(arr));
    println("Mean = " + mean(arr));
    println("Quartile 1 = " + q1(arr));
    println("Quartile 3 = " + q3(arr));
    println("Interquartile Range = " + iqr(arr));
}

/* Returns minimum value of ordered array */
function minimum(arr){
    return arr[0];
}

/* Returns maximum value of ordered array */
function maximum(arr){
    return arr[arr.length - 1];
}

/* Returns median value of ordered array */
function median(arr){
    var length = arr.length;

    if (length % 2 == 0){
        var step1 = arr[length / 2];
        var step2 = arr[(length / 2) - 1];
        var step3 = step1 + step2;
        var step4 = step3 / 2;
        return step4;
    } else {
        // Calculate and return midpoint
        var midpoint = (length - 1) / 2;
        return arr[midpoint];
    }
}

/* Returns mean value of ordered array */
function mean(arr){
    var sum = 0;

    // Adds all values in the array
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var mean = sum / arr.length;

    return mean;
}

/* Returns quartile 1 value of ordered array */
function q1(arr){
    var length = arr.length;
    var possible = ((length + 1)/4);

    if (possible % 1 == 0){
        return arr[possible - 1];
    } else {
        var step1 = Math.floor((length + 1)/4);
        var step2 = step1 + 1;
        var step3 = arr[step1 - 1] + arr[step2 - 1];
        var step4 = step3 / 2;
        return step4;
    }
}

/* Returns quartile 3 value of ordered array */
function q3(arr){
    var length = arr.length;
    var possible = (3*(length + 1)/4);

    if (possible % 1 == 0){
        return arr[possible - 1];
    } else {
        var step1 = Math.floor(3*(length + 1)/4);
        var step2 = step1 + 1;
        var step3 = arr[step1 - 1] + arr[step2 - 1];
        var step4 = step3 / 2;
        return step4;
    }
}

/* Returns interquartile range using q1 and q3 functions */
function iqr(arr){
    return q3(arr) - q1(arr);
}

/* Takes in the user data and stores it into array
* Also takes into account the type of data being entered (parameter named "status")*/
function userInputInserter(int, arr, status){
    if (status){
        for (var i = 1; i <= int; i++){
            var stat = readInt("Number " + i + " : " );

            // Checks if user wants to enter a negative int into set
            if (stat < 0){
                var str = readLine("Do you want to proceed with a negative number? Enter 'Yes' or 'No': ");

                if (str == "Yes" || str == "yes"){
                    arr.push(stat);
                } else if (str == "No" || str == "no") {
                    i -=1
                }

            } else {
                arr.push(stat);
            }
        }
    } else {
        for (var i = 1; i <= int; i++){
            var stat = readFloat("Number " + i + " : " );

            // Checks if user wants to enter a negative float into set
            if (stat < 0){
                var str = readLine("Do you want to proceed with a negative number? Enter 'Yes' or 'No': ");

                if (str == "Yes" || str == "yes"){
                    arr.push(stat);
                } else if (str == "No" || str == "no") {
                    i -=1
                }
            } else {
                arr.push(stat);
            }
        }
    }
}
