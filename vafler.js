
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
}