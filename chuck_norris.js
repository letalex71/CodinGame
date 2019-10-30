/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const message = readline();
let binary;
let output = "";
let iteration;

for (let i = 0; i < message.length; i++)
{
   binary = message.charCodeAt(i).toString(2);
   while (binary.length < 7)
    binary = '0' + binary;
    console.error(binary)
  for (let i = 0; i < binary.length; i++)
  {
      iteration = 0;
     while (binary.charAt(i) == '1')
     {
         i++;
         iteration++;
         if (binary.charAt(i) != 1)
         {
             output += '0 ';
             for (let j = 0; j < iteration; j++)
             output += '0';
             console.error(output);
         }
     }
  }
}

console.log('answer');