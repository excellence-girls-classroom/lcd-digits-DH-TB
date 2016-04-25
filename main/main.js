function printLCD(inputs) {
    var string = givenString();
    console.log(buildLCD(inputs,string));
}

function buildLCD(inputs,string) {
    var stringText = '';
    for(var j = 0;j < 3;j++) {
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            stringText += string[input+10*j];
        }
        stringText += '\n';
    }
    return stringText;
}
