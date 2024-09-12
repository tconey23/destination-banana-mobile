import { Text } from "react-native"

function randomizeLinks(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}

async function getFeatured() {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const parsedDate = `${year}/${month}/${day}`

    try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/feed/featured/${parsedDate}`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
  }
  
async function getLinks(title) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&titles=${title}&formatversion=2&pllimit=max&plnamespace=0`.replace(/%20/g, '_')
    const linksArray = []

    try {
        const response = await fetch(url)
        const data = await response.json()
        
        data.query.pages.forEach((page) => {
            page.links.forEach((link) => {
                linksArray.push(link)
            })
        })
        
    } catch (error) {
        console.log(error)
    }

    const randomizedArray = randomizeLinks(linksArray)
    let x
    randomizedArray.length < 50 ? x = 50 : x = randomizedArray.length
    

    return randomizedArray.slice(0, x)
}

  export { getFeatured, getLinks}
