
var keys = document.querySelectorAll('#calculator span');
var input = document.querySelector('.screen');
var fv;
var sv;
var ope;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {

        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        input.innerHTML += btnVal;
        if (btnVal == '+') {
            fv = inputVal;
            input.innerHTML = '';
            ope="+";
        }
        if (btnVal == '-') {
            fv=inputVal;
            input.innerHTML = '';
            ope="-";
        }
        if (btnVal == '/') {
           fv=inputVal;
            input.innerHTML = '';
            ope="/";
        }
        if (btnVal == '*') {
           fv=inputVal;
           input.innerHTML = '';
           ope="*";
        }
        if (btnVal == 'C') {
            input.innerHTML = '';
            fv=0;
            sv=0;

        }
        if (btnVal == '=' && ope == '+') {
            input.innerHTML = '';
            sv = inputVal;
            var eq = sv;
            var x = new Big(fv);
            var y = x.plus(sv);
            input.innerHTML = y;

        }
        
        if (btnVal == '=' && ope == '-') {
            
            input.innerHTML = '';
            sv = inputVal;
            var eq = sv;
            var x = new Big(fv);
            var y = x.minus(sv);
            input.innerHTML = y;

        }
        
        if (btnVal == '=' && ope == '*') {
            
            input.innerHTML = '';
            sv = inputVal;
            var eq = sv;
            var x = new Big(fv);
            var y = x.times(sv);
            input.innerHTML = y;

        }
        
        if (btnVal == '=' && ope == '/') {
            input.innerHTML = '';
            sv = inputVal;
            var eq = sv;
            var x = new Big(fv);
            var y = x.div(sv);
            input.innerHTML = y;

        }


        e.preventDefault();
    }
}




