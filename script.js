const arr =[];

function calculate(){

    var num1 = document.getElementById("num1").value;
    
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);
    arr.push(num4);
    arr.push(num5);

    var ans1 = mean(arr);
    
    var ans2 = median(arr);
   var ans3 = mode(arr);

   alert("MEAN = "+ans1+"MEAN = "+ans2+ " MODE = "+ans3);
}
//Mean
function mean(arr){
    var sum1=0;
    arr.forEach(e=>sum1=sum1+parseInt(e));
  //  alert(sum1);
    //let sum = arr.reduce((a,b)=>a+b,0);
    return sum1/arr.length;
}

//Median
function median(arr){
    const arrSorted = arr.sort((a,b)=>a-b);
    return arrSorted.length % 2==0 ? (arrSorted[arrSorted.length/2-1]+arrSorted[arrSorted.length/2])/2: arrSorted[Math.floor(arrSorted.length/2)];
}




function mode(arr){

    counts = {}
arr.forEach(function(e) {
  if(counts[e] === undefined) {
    counts[e] = 0
  }
  counts[e] += 1
})

var m=0;
var ans=0;
arr.forEach(e=>{
    if(counts[e] > m){
        m=counts[e];
        ans=e;
    }
})

return ans;
}