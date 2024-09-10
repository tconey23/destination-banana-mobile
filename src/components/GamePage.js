import React from 'react'
import LinksView from './LinksView'
import PagesView from './PagesView'

function GamePage({featuredLinks, featuredTitle}) {
  return (
    <>
      <LinksView featuredTitle={featuredTitle} featuredLinks={featuredLinks}></LinksView>
      <PagesView></PagesView>
    </>
  )
}

export default GamePage


