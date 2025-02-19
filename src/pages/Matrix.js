import React from 'react'

function Matrix() {

  return (
    <div className='moviepage'>
      <div className='description'>
        <h1> The Matrix (1999)</h1>
        <p className='parg1'>
        <br></br>
          Genre: Sci-Fi, Action <br></br>
          Director: The Wachowskis<br></br>
          Starring: Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving<br></br>
          Runtime: 136 minutes<br></br>
          <br></br>
        </p>
        <p>
        Thomas Anderson, a mild-mannered computer programmer who secretly operates as a hacker known as "Neo," begins questioning the reality of the world around him. His search for the truth leads him to a mysterious group led by Morpheus, who reveals a shocking reality: the world he knows is an elaborate illusion created by artificial intelligence to enslave humanity.

As Neo joins the resistance against the machines, he must unlock his full potential to become "The One"—the prophesied savior who can overthrow the Matrix. With mind-bending action sequences, revolutionary visual effects, and deep philosophical themes, The Matrix redefined the sci-fi genre and became one of the most influential films of all time.
        </p>
      </div>
      <div className='trailer'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vKQi3bBA1y8?si=H8PXKCGEZk08rIDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{marginBottom:'30px'}}></iframe>
      </div>
    </div>
  )
}

export default Matrix
