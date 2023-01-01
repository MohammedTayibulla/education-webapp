import React from 'react'
import Title from '../common/title/Title'
import PriceCard from '../pricing/PriceCard'

function HPrice() {
  return (
    <>
      <section className="hprice padding">
      <Title subtitle="our price" title="pricing & packages" />
        <div className="price container grid">
            <PriceCard />

        </div>

      </section>
    </>
  )
}

export default HPrice
