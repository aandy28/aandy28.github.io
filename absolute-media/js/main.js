var active = false;
function navToggle() {
  const currentState = active;
  var navWrapper = document.getElementsByClassName('c-primary-nav');
  var navList = document.getElementsByClassName('c-primary-nav__overlay');

  if(active == false)
  {
    active = true;
    navWrapper[0].classList.add('c-primary-nav--active');
    navList[0].classList.add('on');
  }else{
    active = false;
    navWrapper[0].classList.remove('c-primary-nav--active');
    navList[0].classList.remove('on');
  }
}
