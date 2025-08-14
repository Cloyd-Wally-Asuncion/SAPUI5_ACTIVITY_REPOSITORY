var height = 5;

for (var i = 0; i < height; i++) {
  var line = "";

  for (var j = 0; j < height; j++) {
    if (i == j || j == height - i - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}
