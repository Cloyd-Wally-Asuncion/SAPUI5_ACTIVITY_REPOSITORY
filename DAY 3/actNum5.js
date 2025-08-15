color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

for (var i = 0; i < color.length; i++){
    var position = i + 1;
    var suffix = "th";
    if (position === 1) {
        suffix = o[1];
    } else if (position === 2) {
        suffix = o[2];
    }else if (position === 3) {
        suffix = o[3];
    }
 
    console.log(position + suffix + " choice is " + color[i] + ".");
}