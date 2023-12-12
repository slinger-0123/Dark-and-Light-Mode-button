const button = document.querySelector ('.text');
const bodyelement = document.body;
const outerbox = document.querySelector ('.outer');

const side1 = document.querySelector ('.side1');

const gola = document.querySelector ('.gola');

const togglebar = document.querySelector ('.togglebar');

const side2 = document.querySelector ('.side2');


var i = 1;


function triggerTransition() {
    gola.classList.add('transition-effect');
  }

  function triggerTransition2() {
    gola.classList.remove('transition-effect');
  }


  function xyz () {
    gola.classList.add('newproperty');
    side1.classList.add('newproperty');
    bodyelement.classList.add('newproperty');
    side2.classList.add('newproperty');
    togglebar.classList.add('newproperty');
  }
gola.addEventListener ('click', function () {

    
    if ( i == 1){
        xyz ();
    bodyelement.style.backgroundColor = 'black';
    gola.style.backgroundColor = 'white';
    side1.style.borderColor  = 'white';
    side2.style.borderColor  = 'white';
    togglebar.style.borderColor  = 'white';
    i = 2;
    triggerTransition ();
    return ;
    }

    if (i == 2){
        xyz ();
        bodyelement.style.backgroundColor = 'white';
        gola.style.backgroundColor = 'black';
        side1.style.borderColor  = 'black';
    side2.style.borderColor  = 'black';
    togglebar.style.borderColor  = 'black';
        i = 1;
        triggerTransition2 ();
        return ;
    }

});