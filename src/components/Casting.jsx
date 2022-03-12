import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Casting = () => {
  const [casting, setCasting] = useState([])
  useEffect(() => {
    obtenerCasting()
  }, [])

  const obtenerCasting = async () => {
    const data = await fetch('https://api.sampleapis.com/futurama/cast')
    const cast = await data.json()
    setCasting(cast)
  }
  return (
    <>
      <h1>Actores </h1>
      <div className="container-casting">
        {casting.map((item) => (
          <Card className="card-cast" key={item.id}>
            <Row>
              <Col xs={12} sm={14}>
                <h3>{item.name}</h3>
                <hr />
                <h6>
                  <b>Nacio:</b> {item.born}
                </h6>
                <b>Biografia:</b>
                <br />
                <a href={`${item.bio.url}`} target="_blank">
                  {item.bio.url}
                </a>
                <Button variant="primary" href="/" className="boton-cast">
                  Volver
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Casting;
