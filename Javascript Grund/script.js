var bla = 1;

function myFunction() {
    
    if (bla == 1) {
        
    document.getElementById('paragraf2').style.display = 'none';
    document.getElementById('button').innerHTML = 'Show';
    bla = 0;
    }
    
    else if (bla == 0) {
        document.getElementById('paragraf2').style.display = 'inline';
        document.getElementById('button').innerHTML = 'Hide';
        bla = 1;
    }
    
}