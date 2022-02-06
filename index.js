// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
// За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

 let score=0;
 let answer = prompt("Земля имее форму: (Шара, Квадрата, Треугольника) ?")
 if(answer === 'Шара'){
     alert("Верно")
     score+=2;
 }
 else{
     alert("Не верно ")
 }



  answer = prompt("Земля имее форму: (Шара, Квадрата, Треугольника) ?")
 if(answer === 'Шара'){
     alert("Верно")
     score+=2;
 }
 else{
     alert("Не верно ")
 
 answer = prompt("Земля имее форму: (Шара, Квадрата, Треугольника) ?")
 if(answer === 'Шара'){
     alert("Верно")
     score+=2;
 }
 else{
     alert("Не верно ")
 
 alert(`Баллы: ${score}`  );





// // Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// answer = Number(prompt("Сколько вам лет  ?"));

 if(answer <= 2 && answer >= 0)
 {
     alert("Rebenok");
 }
 else if(answer >= 12 && answer <= 18)
 {
     alert("Podrostok");
 }
 else if(answer >= 18 && answer <=60)
 {
     alert("Vzrosliy");
 }
 else if(answer > 60)
 {
     alert("Pensioner");
 }
 else
     alert("Uncorrect format !");



// // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// // вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.


 let userAnswer = 'Y';
 while(userAnswer == 'Y')
 {
     let num1, sign, num2;
     num1 = Number(prompt("Enter number one: "));
     sign = prompt("Enter sign: ");
     num2 = prompt("Enter number second: ");
     if(sign=='+')
         alert(`Result:${num1 + num2}`);
     else if(sign =='-')
         alert(`Result:${num1 - num2}`);
     else if(sign =='*')
         alert(`Result:${num1 * num2}`);
     else if(sign =='/')
         alert(`Result:${num1 / num2}`);
     userAnswer = prompt("Do you want to continue ? ( Y/N )");
 }


//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
//При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


let numbers = [];
let positiv=0,negative=0,nulls=0;

alert("Enter 10 numbers: ");
while(numbers.length < 10)
{
    numbers.push(prompt("Enter number " + numbers.length ));
    
}

for(let i =0; i <numbers.length;i++)
{
    if(numbers[i] > 0)
        positiv++;
    else if(numbers[i] == 0)
        nulls++;
    else if(numbers[i] < 0)
        negative++;
}
prompt(`Negative: ${negative}; Positive: ${positiv}; Nulls: ${nulls};`);

