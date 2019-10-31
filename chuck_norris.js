/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const message = readline();
console.error(message);
let binary = "";
let output = "";
let iteration;

for (let i = 0; i < message.length; i++)
{
   binary += message.charCodeAt(i).toString(2);
   while (binary.length < 7)
    binary = '0' + binary;
}
    console.error(binary)
  for (let i = 0; i < binary.length; i++)
  {
      iteration = 1;
      while (binary.charAt(i) == binary.charAt(i + 1))
      {
          iteration++;
          i++;
      }
      output += (binary.charAt(i) == '0') ? "00 " : "0 ";
      for (let i = 0; i < iteration; i++)
      {
          output += '0'
      }
      output += ' ';
    }
    
console.log(output.slice(0, output.length - 1));