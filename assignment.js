/**
section-1
 .........Kilometer to meter conversion..........
 */
function KilometerToMeter(num){
    if(num<0)
        return -1;
    else
        return num*1000;
}
var num= 3.123;
var result =KilometerToMeter(num);
if(result==-1)
    console.log("Sorry! Distance can't be negative.");
else
    console.log(num,"kilometer =",result,"meter");
/**
 section-2
 ..........Budget Calculation.........
 */
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    if(numOfWatch<0||numOfPhone<0||numOfLaptop<0)
        return -1;
    var totalCost=(numOfWatch*50)+(numOfPhone*100)+(numOfLaptop*500)
    return totalCost;
}

var numOfWatch=5;
var numOfPhone=2;
var numOfLaptop=1;
var budget=budgetCalculator(numOfWatch,numOfPhone,numOfLaptop);
if(budget==-1)
    console.log("SORRY! Quantity can't be negative.");
else
    console.log("You total cost will be "+budget+"$");
/**
 Section-3
 ..........Hotel Cost Calculation........
 */

 function hotelCost(days){
    var cost, fisrt10daysCost, second10daysCost, lastDaysCost;
    if(days<=10){
        cost=days*100;
    }
    else if(days<=20){
        fisrt10daysCost=10*100;
        lastDaysCost=(days-10)*80;
        cost=lastDaysCost+fisrt10daysCost;
    }
    else{
        fisrt10daysCost=10*100;
        second10daysCost=10*80;
        lastDaysCost=(days-20)*50;
        cost=lastDaysCost+fisrt10daysCost+lastDaysCost;
    }
    return cost;
 }
var daysYouStay=11;
var cost=hotelCost(daysYouStay);