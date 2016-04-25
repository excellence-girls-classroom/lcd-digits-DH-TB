describe('LCD', function() {
  var inputs;
  var string;
  beforeEach(function(){
    string = givenString();
    inputs = [9,1,0];
  });

  it(' print correct text', function () {
      spyOn(console, 'log');
      printLCD(inputs);
    var expectText =
          '._.'+'...'+'._.'+'\n'+
          '|_|'+'..|'+'|.|'+'\n'+
          '..|'+'..|'+'|_|'+'\n';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
