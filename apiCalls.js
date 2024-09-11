import { Text } from "react-native"

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
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&titles=${title}&formatversion=2&pllimit=max`.replace(/%20/g, '_')
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

    return linksArray
}

  export { getFeatured, getLinks}