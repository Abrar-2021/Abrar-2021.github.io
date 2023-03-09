/*============ toggle icon navbar ============*/
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () =>
menuicon.classList.toggle('bx-x');
navbar.classList.toggle('active');


/*============ scroll sections active Link ============*/
Let sections = document.querySelectorAll ('section');
Let navlinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections. foreach (sec => {
        let top = window.scrollY;
        let offset = sec.offsettop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.queryselector('header nav a[herf*=' + id +']').classlist.add('active');
            });
        };
    });
    /*============ sticky navbar ============*/
    let header = document.querySelector('header');

    header.classlist.toggle('sticky', window.scrollY > 100);

};
