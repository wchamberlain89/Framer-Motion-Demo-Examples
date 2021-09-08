import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from './Card'
import ExpandedCard from './ExpandedCard'

const CardList = ({ match, data }) => {
  const selectedId = match.params.id
  return (
    <>
      <ul className='card-list'>
        {data.map( card => {
          return(
              <Card
                key={card.id}
                {...card}
                />
            )
          })}
      </ul>
      <AnimatePresence>
        {selectedId && <ExpandedCard id={selectedId} key={`card-${selectedId}`}/>}
      </AnimatePresence>
    </>
  )
}

export default CardList