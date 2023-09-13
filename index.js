document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildList(e.target["new-task-description"].value)
        form.reset()   
    } )
    // Builds list with x button next to it
    function buildList (todo){
        let li = document.createElement('li')
        let btn = document.createElement('button')
        btn.addEventListener('click', deleteBtn)
        btn.textContent = 'x'
        li.textContent = `${todo} `
        li.appendChild(btn)
        console.log(li)
        document.querySelector('#tasks').appendChild(li)
    }
    // Deletes from the list when click x button
    function deleteBtn(e) {
        e.target.parentNode.remove()
    }
})