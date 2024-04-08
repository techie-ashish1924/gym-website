function openForm() {
    console.log('hello');
    const ele = document.getElementById('pop-up');
    ele.style.top = "57%";
    ele.style.transition = '2s';    
    
}

function closeForm() {
    console.log('Bye');
    const ele = document.getElementById('pop-up');
    ele.style.top = "-70%";
    ele.style.transition = '2s';  
}


// const icon = document.getElementById('icon');

const nav_side_btn = document.getElementById('iconaa');

const icon_div = document.getElementById('icon-div');

nav_side_btn.addEventListener('click',function()
{
    console.log('click');
    const nav = document.getElementById('nav');
    const nav_item = document.getElementById('nav-features');

    if(nav_item.style.display == 'flex')
    {
        nav_item.style.display = 'none';
        // icon_div.style.top = "90vh"
        location.reload();
    }
    else{
        
        nav_item.style.display = 'flex';
        nav_item.classList.toggle('show-data');
        nav.classList.toggle('new-nav');

        icon_div.style.top = "70vh"
        console.log(nav);
        // nav_item.style.flexDirection = 'column';
        
    }

})
