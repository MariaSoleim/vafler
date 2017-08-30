
window.onload = function(){
    var showRecipe1 = document.getElementById('showRecipe1');
    var showRecipe2 = document.getElementById('showRecipe2');
    var showRecipe3 = document.getElementById('showRecipe3');

    var recipe1 = document.getElementById('recipe1');
    var recipe2 = document.getElementById('recipe2');
    var recipe3 = document.getElementById('recipe3');

    var ingredients1 = document.getElementById('ingredients1');
    var ingredients2 = document.getElementById('ingredients2');
    var ingredients3 = document.getElementById('ingredients3');

    var howto1 = document.getElementById('howto1');
    var howto2 = document.getElementById('howto2');
    var howto3 = document.getElementById('howto3');

    var funfact1 = document.getElementById('funfact1');
    var funfact2 = document.getElementById('funfact2');
    var funfact3 = document.getElementById('funfact3');
    var funfact4 = document.getElementById('funfact4');
    var funfact5 = document.getElementById('funfact5');
    var funfact6 = document.getElementById('funfact6');
    var funfact7 = document.getElementById('funfact7');
    funfact1.style.display = 'none';
    funfact2.style.display = 'none';
    funfact4.style.display = 'none';
    funfact5.style.display = 'none';
    funfact6.style.display = 'none';
    funfact7.style.display = 'none';

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    showRecipe1.style.cursor = 'pointer';
    showRecipe2.style.cursor = 'pointer';
    showRecipe3.style.cursor = 'pointer';

    showRecipe1.onclick = function() {
        if (showRecipe1.firstElementChild.textContent === 'Se oppskriften >') {
            recipe2.style.display = "none";
            recipe3.style.display = "none";
            ingredients1.style.display = "flex";
            howto1.style.display = "flex";
            showRecipe1.firstElementChild.textContent = '< Skjul oppskrift';
        }
        else {
            ingredients1.style.display = 'none';
            howto1.style.display = 'none';
            recipe2.style.display = 'flex';
            recipe3.style.display = 'flex';
            showRecipe1.firstElementChild.textContent = 'Se oppskriften >';
        }
    };

    showRecipe2.onclick = function() {
        if (showRecipe2.firstElementChild.textContent === 'Se oppskriften >') {
            recipe1.style.display = "none";
            recipe3.style.display = "none";
            ingredients2.style.display = "flex";
            howto2.style.display = "flex";
            showRecipe2.firstElementChild.textContent = '< Skjul oppskrift';
        }
        else {
            ingredients2.style.display = 'none';
            howto2.style.display = 'none';
            recipe1.style.display = 'flex';
            recipe3.style.display = 'flex';
            showRecipe2.firstElementChild.textContent = 'Se oppskriften >';
        }
    };

    showRecipe3.onclick = function() {
        if (showRecipe3.firstElementChild.textContent === 'Se oppskriften >') {
            recipe1.style.display = "none";
            recipe2.style.display = "none";
            ingredients3.style.display = "flex";
            howto3.style.display = "flex";
            showRecipe3.firstElementChild.textContent = '< Skjul oppskrift';
        }
        else {
            ingredients3.style.display = 'none';
            howto3.style.display = 'none';
            recipe1.style.display = 'flex';
            recipe2.style.display = 'flex';
            showRecipe3.firstElementChild.textContent = 'Se oppskriften >';
        }
    };


    left.onclick = function() {
        // offsetParent!==null vil si at objektet er synlig
        // hvis conditionen er true, har vi funnet funfacten som vises akkurat nå
        if (funfact3.offsetParent !== null) {
            funfact3.style.display = 'none';
            funfact2.style.display = 'flex'
        } else if (funfact2.offsetParent !== null) {
            funfact2.style.display = 'none';
            funfact1.style.display = 'flex'
        } else if (funfact1.offsetParent !== null) {
            funfact1.style.display = 'none';
            funfact7.style.display = 'flex'
        } else if (funfact7.offsetParent !== null) {
            funfact7.style.display = 'none';
            funfact6.style.display = 'flex'
        } else if (funfact6.offsetParent !== null) {
            funfact6.style.display = 'none';
            funfact5.style.display = 'flex'
        } else if (funfact5.offsetParent !== null) {
            funfact5.style.display = 'none';
            funfact4.style.display = 'flex'
        } else {
            funfact4.style.display = 'none';
            funfact3.style.display = 'flex'
        }
    };

    right.onclick = function() {
        // offsetParent!==null vil si at objektet er synlig
        // hvis conditionen er true, har vi funnet funfacten som vises akkurat nå
        if (funfact3.offsetParent !== null) {
            funfact3.style.display = 'none';
            funfact4.style.display = 'flex'
        } else if (funfact4.offsetParent !== null) {
            funfact4.style.display = 'none';
            funfact5.style.display = 'flex'
        } else if (funfact5.offsetParent !== null) {
            funfact5.style.display = 'none';
            funfact6.style.display = 'flex'
        } else if (funfact6.offsetParent !== null) {
            funfact6.style.display = 'none';
            funfact7.style.display = 'flex'
        } else if (funfact7.offsetParent !== null) {
            funfact7.style.display = 'none';
            funfact1.style.display = 'flex'
        } else if (funfact1.offsetParent !== null) {
            funfact1.style.display = 'none';
            funfact2.style.display = 'flex'
        } else {
            funfact2.style.display = 'none';
            funfact3.style.display = 'flex'
        }
    };
}