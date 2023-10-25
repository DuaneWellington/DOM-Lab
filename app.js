console.log('JS:Loaded')

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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
    
    
    
    
    



//console.log(link)


