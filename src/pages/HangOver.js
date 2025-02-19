import React from 'react'

function HangOver() {
  return (
    <div className='moviepage'>
      <div className='description'>
        <h1>The Hangover (2009)</h1>
        <p className='parg1'>
        <br></br>
          Genre: Comedy<br></br>
          Director: Todd Phillips<br></br>
          Starring: Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha<br></br>
          Runtime: 100 minutes<br></br>
          <br></br>
        </p>
        <p>
          In this outrageous comedy, four friends—Phil, Stu, Alan, and Doug—head to Las Vegas for an unforgettable bachelor party before Doug’s wedding.
          However, when they wake up the next morning with no memory of the previous night, a missing groom, a tiger in their hotel bathroom,
          and a baby in their closet, they must piece together what happened.
          As they retrace their steps through the chaos of Vegas, they encounter a bizarre series of events, including a stolen police car,
          a furious gangster, and the legendary Mike Tyson. With time running out, the trio must find Doug and get him back in time for his wedding.
        </p>
      </div>
      <div className='trailer'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tcdUhdOlz9M?si=i0eDCe6Ulg6fSGES" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{marginBottom:'30px'}}></iframe>
      </div>
    </div>
  )
}

export default HangOver
