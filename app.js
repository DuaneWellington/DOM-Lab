console.log('JS:Loaded')

const mainEl = document.querySelector("main")

// console.log(mainEl)
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
//mainEl.setAttribute('class', 'flex-ctr')

mainEl.classList.add("flex-ctr")
console.dir(mainEl)
