const yesBtn =document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si amorcito uwu')
});

yesBtn.addEventListener('click',function () {
    alert('Porque si no :) ')
});

yesBtn.addEventListener('click',function () {
    alert('no importa porque el que manda aca es diosito :) ')
});

yesBtn.addEventListener('click',function () {
    alert(' En verdad no me equivoque en estar con una chica tan hermosa como tu ):')
});

yesBtn.addEventListener('click',function () {
    alert('Gracias por estar conmigo en las buenas y en las malas ')
});

yesBtn.addEventListener('click',function () {
    alert('Podran ver millones... no billones..  de personas ')
});

yesBtn.addEventListener('click',function () {
    alert('pero con la unica que quisiera estar para resto de mi vida es contigo amor ')
});

yesBtn.addEventListener('click',function () {
    alert('Gracias por entenderme tal y como soy  ')
});

yesBtn.addEventListener('click',function () {
    alert('Eres la mejor novia que un novio pueda tener ): ')
});

yesBtn.addEventListener('click',function () {
    alert('Gracias por hacerme feliz ')
});

yesBtn.addEventListener('click',function () {
    alert('Te amo geraldine ')
});

const noBtn =document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});