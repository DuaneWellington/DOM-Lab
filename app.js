console.log('JS:Loaded')

// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


  // ---------------------------------------------------------

// DOM Lab Part 1
// Task 1
// .0
const mainEl = document.querySelector("main")

// .1
mainEl.style.backgroundColor = 'var(--main-bg)'

// .2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// .3
mainEl.classList.add("flex-ctr")

// ----------------

// Task 2
// .0
const topMenuEl = document.getElementById('top-menu')
//console.log(topMenuEl)

// .1
topMenuEl.style.height = '100%'

// .2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// .3
topMenuEl.classList.add('flex-around')

// -----------------

// Task 3

// .1
  
menuLinks.forEach((link) => {
    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', link.href)
    console.log(link)
    linkEl.innerHTML = link.text
    topMenuEl.appendChild(linkEl)
})

// --------------------------------------------------------------

// Dom Lab Part 2

// Task 4

// .0

const subMenuEl = document.getElementById('sub-menu')
console.log(subMenuEl)

// .1

subMenuEl.style.height = '100%'

// .2

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// .3

subMenuEl.classList.add('flex-around')
    
// .4

subMenuEl.style.position = 'absolute'

// .5

subMenuEl.style.top = '0'

// ---------------------------------------------------------------

// Task 5

// .1

const topMenuLinks = document.getElementsByName('topMenu: a')
let showingSubMenu = false

// .2

topMenuEl.addEventListener('click', function(e) {
  e.preventDefault()
  if (e.target.tagName !== 'A') {
    return
 // } else {console.log(e.target.innerText)
// .3
  } if (e.target.tagName === 'active') {
    e.target.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top = 0;
// .4
  } if (e.target.tagName === 'active') {
    topMenuLinks.classList.remove('active')
// .5
  } e.target.classList.add('active')
// .6
  // const subLinksProp = e.target.innerHTML.toLowerCase()
  // for(link of menuLinks){
  //   if (link.text.subLinksProp) {
  //   continue
  //   showingSubMenu = true
  // }  else {showingSubMenu = false
  // }}})
const findSubs = menuLinks.find(e.target.tagName) {
console.log(findSubs)}

})
// .7


  



//console.log(link)
