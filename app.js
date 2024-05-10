console.log('This works');

// Menu toggles

document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width == '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the "Quadratics" menu item that acts as the toggle
    var toggleItem = document.querySelector('.submenu-toggle');

    // Add click event listener to toggle the display of the submenu
    toggleItem.addEventListener('click', function(event) {
        // Check if the clicked item is not a submenu item
        if (!event.target.closest('.submenu')) {
            // Toggle the display of the submenu
            var submenu = this.querySelector('.submenu');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            
            // Prevent the default action only for clicks directly on the toggle item
            event.preventDefault();
        }
    });
});

// target the numbers
function QuadraticCondition(b , c) {
    // there are two numbers that multiply to make c
    // there are two numberss that add to make b 
    const discriminant = b*b - 4*c
    const isDiscriminantValid = Number.isInteger(Math.sqrt(discriminant));
    return isDiscriminantValid && c!=0 && b!=0
}

function format (number) {
    return (number > 0 ? "+" : "-") + Math.abs(number);
}

function GenerateAppropriateNumbers() {
    let b,c
    do {
        b = Math.floor(Math.random() * 20) - 10
        c = Math.floor(Math.random() * 20) - 10
    } while (!QuadraticCondition(b,c));

    document.getElementById("b").textContent = format(b)
    document.getElementById("c").textContent = format(c)
}

document.addEventListener('DOMContentLoaded', GenerateAppropriateNumbers());