import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const DetallePersonaje = () => {
  const { id } = useParams()

  const [characters, setCharacters] = useState([])

  const getNames = async (url) => {
    const data = await fetch(url)
    const pers = await data.json()
    setCharacters(pers)
  }

  useEffect(() => {
    getNames(`https://api.sampleapis.com/futurama/characters/${id}`)
  }, [id])

  return (
    <>
      <div className="contain">
        <Card className="card-body" key={characters.id}>
          <h1 className="nombre">
            {characters?.name?.first} {characters?.name?.middle}{' '}
            {characters?.name?.last}
          </h1>
          <Button variant="primary" href="/characters" className="boton">
            Volver
          </Button>
          <img
            className="imagen"
            src={characters?.images?.main}
            width="200"
            height="300"
          />
          <Card.Body>
            <br />
            <hr />
            <h6>
              <b>N°: </b> {characters.id}{' '}
            </h6>
            <h6>
              <b>Edad:</b> {characters.age}
            </h6>
            <h6>
              <b>Genero:</b> {characters.gender}
            </h6>
            <h6>
              <b>Especie:</b> {characters.species}
            </h6>
            <h6>
              <b>Planeta:</b> {characters.homePlanet}
            </h6>
            <h6>
              <b>Ocupacion:</b> {characters.occupation}
            </h6>
          </Card.Body>
          <hr />
          <ul key={characters.id}>
            <b>FRACES: </b>
            <br />
            <br />
            {characters?.sayings?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <Button variant="primary" href="/characters" className="boton">
            Volver
          </Button>
        </Card>
      </div>
    </>
  )
}
export default DetallePersonaje
