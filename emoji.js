/* emoji API*/
document.querySelector('#press').addEventListener('click', getEmoji)

function getEmoji(){
  const choice = document.querySelector('#user').value
  const url = `https://emojihub.herokuapp.com/api/random/category_${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.name').innerText=data.name
        document.querySelector('.category').innerText=data.category
        document.querySelector('.emoji').innerText=data.htmlCode[0]
        document.querySelector('.unicode').innerText=data.unicode
        document.querySelector('#tryThis').value=data.htmlCode[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//https://github.com/cheatsnake/emojihub