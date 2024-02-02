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


function icon()
{
    const nav = document.getElementById('nav');
    const nav_item = document.getElementById('nav-features');
    // nav.style.height = '30vh';
    if(nav_item.style.display == 'block')
    {
        nav_item.style.display = 'none';
    }
    else{
        nav_item.style.display = 'block';
    }
    // nav_item.style.display = 'block';
    // nav_item.style.display = 'flex';
    // nav_item.style.flexDirection = 'coloumn';
    

}