
// do the sum by using even number from 1 to 100 .

let sum = 0;

for (let i = 0; i <= 100 ; i = i + 2 ) {
    document.write("The number is " + i + "<br>");

  sum = sum + i;
    
}

document.write( "the summation of even number 1 to 100 = " + sum);