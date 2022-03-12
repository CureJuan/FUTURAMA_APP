import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import imagen from '../image/inicio.png'

const DetalleEpisodios = () => {
  const { id } = useParams()

  const [episodes, setEpisodes] = useState([])

  const getEpisodes = async (url) => {
    const data = await fetch(url)
    const epis = await data.json()
    setEpisodes(epis)
  }

  useEffect(() => {
    getEpisodes(`https://api.sampleapis.com/futurama/episodes/${id}`)
  }, [id])

  return (
    <div className="contain">
      <Card className="card-body-det-ep" key={episodes.id}>
        <img className="imagen2" src={imagen} />
        <Card.Body>
          <h1 className="nombre2">
            <b> {episodes.title}</b>
          </h1>
          <br />
          <hr />
          <h6>
            <b>N°: </b> {episodes.number}{' '}
          </h6>
          <h6>
            <b>Fecha de estreno:</b> {episodes.originalAirDate}
          </h6>
          <h6>
            <b>Escrito por:</b> {episodes.writers}
          </h6>
        </Card.Body>
        <hr />
        <b>Descripcion: </b> {episodes.desc}
        <Button variant="primary" href="/episodios" className="boton"/ >
          Volver
      </Card>
    </div>
  )
}
export default DetalleEpisodios
