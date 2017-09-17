function average (array){
    let sum = 0;
    for (i = 0; i < array.length; i++){
    sum += parseInt(array[i]);
    }
    let avg = sum/array.length;
    let newAvg = Math.round(avg);
    document.write(newAvg);
}

var scores = prompt("Please enter a set of numbers, each separated by a comma and a space").split(",");
average(scores);
document.write("<br/>refresh the page to use this function again");