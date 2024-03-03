const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelector('links');

toggleBtn.addEventListener('click', function() {
    //console.log("Toggle button clicked");
    //console.log(sidebar.classList);

    // if(sidebar.classList.contains('show-sidebar')) {
    //     // Sidebar is currently open, so let's close it
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     // Sidebar is currently closed, so let's open it
    //     sidebar.classList.add('show-sidebar');
    // }

    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})

