console.log('This works');

document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width == '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Find the "Quadratics" menu item that acts as the toggle
//     var toggleItem = document.querySelector('.submenu-toggle');

//     // Add click event listener to toggle the display of the submenu
//     toggleItem.addEventListener('click', function(event) {
//         // Prevent the link action
//         event.preventDefault();

//         // This finds the nested submenu within the clicked item
//         var submenu = this.querySelector('.submenu'); // Accurately target the submenu

//         if (submenu.style.display === 'block') {
//             submenu.style.display = 'none';
//         } else {
//             submenu.style.display = 'block';
//         }
//     });
// });


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





