console.log('JS:Loaded')

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


//   const words = ["one", "two", "three", "four"];
//   words.forEach((word) => {
//     console.log(word);
//     if (word === "two") {
//       words.shift(); //'one' will delete from array
//     }
//   }); // one // two // four
  
//   console.log(words); // ['two', 'three', 'four']


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
    document.createElement('a')
    return link
})
   const hrefEl = document.createAttribute('a', href)

//console.log(link)


