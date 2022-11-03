const navOpenBtn = document.getElementById('openIcon')
const navCloseBtn = document.getElementById('closeIcon')
const navBar = document.getElementById('navBar')
const container = document.getElementById('main--container')

let i = 0

const handleOpen = navOpenBtn.addEventListener('click', () => {
  i = 1
  navBar.classList.add('active')
  console.log('opend')
  handleBack()
})

const handleClose = navCloseBtn.addEventListener('click', () => {
  i = 0
  navBar.classList.remove('active')
  console.log('closed')
  handleBack()
})

const handleBack = () => {
  if (i === 1) {
    container.classList.add('back')
    console.log('back')
  } else {
    container.classList.remove('back')
    console.log('not back')
  }
}
