// setting scroll-padding-top property value with the exact the navbar height
const navigationHeight = document.querySelector('nav').offsetHeight
document.documentElement.style.setProperty('--navHeight', navigationHeight + 'px');