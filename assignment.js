/**
section-1
 .........Kilometer to meter conversion..........
 */
function KilometerToMeter(num){
    if(num<0)
        return -1;       //when one give negative input then function return -1
    else
        return num*1000; // we know that 1 kilometer = 1000 meter.
}
var num= 3.123;
var result =KilometerToMeter(num);  //call the function and pass a perameter and receive the output in a variable named result.
if(result==-1)      //
    console.log("Sorry! Distance can't be negative.");
else
    console.log(num,"kilometer =",result,"meter");
/**
 section-2
 ..........Budget Calculation.........
 */
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    if(numOfWatch<0||numOfPhone<0||numOfLaptop<0)       //if number of watch or phone or laptop is negative then it will give e error message.
        return -1;                                      //when one give negative input then function return -1
    
        var totalCost=(numOfWatch*50)+(numOfPhone*100)+(numOfLaptop*500) // the sum of watch cost, phone cost, laptop cost is the total cost.
    return totalCost;                                               
}

var numOfWatch=5;
var numOfPhone=2;
var numOfLaptop=1;
var budget=budgetCalculator(numOfWatch,numOfPhone,numOfLaptop); //call the function and pass three perameter and receive the function output in a variable named budget.
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
    if(days<0)                             // if anyone give a negative value then program will return a error.
        return -1;
    if(days<=10){                          // if one will have spent 10 days or less than 10 days then perday cost will be 100$ 
        cost=days*100;
    }
    else if(days<=20){                     // if one will have spent 20 days or less than 20 days then perday cost will be 80$ 
        fisrt10daysCost=10*100;            // calculation for first 10 days cause after 10day cost will decrease
        lastDaysCost=(days-10)*80;         // calculation for remaining days
        cost=lastDaysCost+fisrt10daysCost; // then add two cost and get the final cost
    }
    else{                                  // if one will have spent more than 20 days then it will cost 50$
        fisrt10daysCost=10*100;            // calculation for first 10 days cause after 10day cost will decrease
        second10daysCost=10*80;            // calculation for 11 days to 20 days cause after 20day cost will decrease
        lastDaysCost=(days-20)*50;         // calculation for remaining days
        cost=lastDaysCost+fisrt10daysCost+lastDaysCost;     // then add two cost and get the final cost
    }
    return cost;
 }
var daysYouStay=11;
var cost=hotelCost(daysYouStay);        //call the function and receive a value and store it to cost variable.
if(cost==-1)
    console.log("SORRY! Days can't be negative.");
else
    console.log("Your hotel cost is "+cost+" taka.");

/**
Section-4
..........Mega Friend find out........
 */

function megaFriend(friendList){
    if(friendList.length==0)                    //check whether array is empty or not
        return 0; 
    var cnt=0;
    var maxLength=-1, maxName;
    for(var i=0;i<friendList.length;i++){ 
        if(typeof friendList[i]!=='string')     //check to ensure that the program is taking string input
            return "isNotString";               //if it doesn't take string then return this is not a string
        else if(friendList[i]=="")              //here the program check that you have entered at least one valid friend name
            cnt++;
    }
    if(cnt==friendList.length)                  //if cnt is equal to friendlist length then it means your don't enter any valid friend name
        return "blank";
    for(var i=0;i<friendList.length;i++){       //in this loop program check the max length name.
        var tmpLength=friendList[i].length;
        if(maxLength<tmpLength){                
            maxLength=tmpLength;
            maxName=friendList[i];
        }
    }
    return maxName;
}
var friendList=["Kazi Shohanur Rashid","Hridoy","Rafi","Asif","Srizon","Samuel"];
var result=megaFriend(friendList);   //call the function and pass a perameter which is the friendlist array and receive the output in a variable name result.
if(result==0)
    console.log("Your friend list is empty.");
else if(result=="isNotString")
    console.log("Name can't be a number.");
else if(result=="blank")
    console.log("No name founded!");
else
    console.log("Your big name friend is "+result);
