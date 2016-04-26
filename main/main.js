function printLCD(inputs) {
    var string = givenString();
    console.log(buildLCD(inputs,string));
}

function buildLCD(inputs,string) {
    var stringText = '';
    var input =inputs.toString();
    var arr = input.split("");
    for(var j = 0;j < 3;j++) {
        for(var i = 0;i < arr.length;i++) {
            stringText += string[j][parseInt(arr[i])] + ' ';
        }
        stringText += '\n';
    }
    return stringText;
}