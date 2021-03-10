const btn = document.querySelector('.btn');
const menu = document.querySelector('.conteneurMenu');
const menuListeItem = document.querySelectorAll('.menuListeItem');
const iconMenu = document.querySelector('.menuIcon');
let i = 0;

const TL = new TimelineMax({paused: true});

TL
.to(menu, 1, {width:'25%'})
.staggerTo(menuListeItem,0.3,{opacity: 1, x: 0}, 0.2, '-=0.75')

btn.addEventListener('click', () => {
   
    if(i === 0) {
        i++;
        TL.play();
        iconMenu.src = '/img/croix.svg';
    } else {
        i--;
        TL.reverse();
        iconMenu.src = '/img/menu.svg';
    }

});


/*quand on clique sur  n'importe quel
élément du tableau menuListeItem*/
menuListeItem.forEach(element => element.addEventListener('click', () => {
    i--;
    TL.reverse();
    iconMenu.src = '/img/menu.svg';
}));
    




