var height = 5;
var i = 0;

while (i < height) {
  var line = "";

  var space = 0; 
  while (space < i) {
    line += " ";
    space++;
  }

  var star = 0; 
  while (star < height - i) {
    line += "*";
    star++;
  }

  console.log(line);
  i++;
}
