//Question 1
if(12 > 6){
  console.log(12)
}

//Question2
num1 = 13
num2 = 24
num3 = 16
if (num2 > num3){
  alert(num2)
}
else if (num3 < num2){
  alert(num1)
}

//Question3
money1 = 10
money2 = 20
money3 = 30
money4 = 40
money5 = 50
if (money1 < money5 && money2 < money5 && money3 < money5 && money4 < money5){
  alert(money5)
}

//Question 4
for (var i = 0; i < 15; i++){
  if(i % 2 != 0){
    console.log("odd")
  }
  else{
  console.log("even")
  }
  console.log(i)
}

//Question 5
for (var i = 0; i < 100; i++){
  if(i % 3 === 0 ){
    console.log("Fizz")
  }
  else if (i % 5 == 0){
  console.log("Buzz")
  }
  else if (i % 3 === 0 && i % 5 == 0){
    console.log("FizzBuzz")
  }
}
//Question 6
for (var i = 0; i < 1000; i++){
  if (i % 3===0){
    console.log(i)
  }
}
//Question 7
for (var i = 1; i < 5; i ++){
  var local ="";
for (var y = 5; y > i; y--){
    local = local.concat(" ");
  }
for (var j = 1; j <= i; j++){
  local = local.concat(j);
}
for (var k = i-1; k > 0; k--){
  local = local.concat(k)
}
console.log(local);
}
//Question 8
for(var i = 4;i > 0; i--){
  var local = "";
  for(var y = 5; y > i; y--){
    local = local.concat(" ")
  }
  for(var j = 1; j<= i; j++){
    local = local.concat(j);
  }
  for (var k = i-1; k > 0; k--){
    local = local.concat(k)
  }
  console.log(local)
}
