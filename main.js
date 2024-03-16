let random1 = Math.floor(Math.random() * 100);
alert("Randomda chiqqan son: " + random1);

if (random1 % 3 == 0) {
    alert(random1 + " - bu son Fizz")
}else if (random1 % 5 == 0 )  {
    alert(random1 + " - bu son Buzz")
}else if (random1 % 3 == 0 || random1 % 5 == 0) {
    alert(random1 + " - bu son FizzBuzz")
}else {
    alert(random1 + " - bu son Fizz, Buzz va FizzBuzz ham emas...")
}