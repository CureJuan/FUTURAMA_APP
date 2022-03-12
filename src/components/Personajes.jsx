import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Personajes = () => {
  const [civil, setCivil] = useState([])
  useEffect(() => {
    obtenerCivil()
  }, [])

  const obtenerCivil = async () => {
    const data = await fetch('https://api.sampleapis.com/futurama/characters')
    const char = await data.json()
    setCivil(char)
  }

  return (
    <>
      <h1>Personajes </h1>
      <div className="container-personajes">
        {civil.map((item) => (
          <Card className="card-todos" key={item.id}>
            <Row>
              <Col xs={12} sm={14}>
                <img src={item.images.main} width="150" height="260" />
                <hr />
                <h6>
                  {item.name.first} {item.name.middle} {item.name.last}
                </h6>
                <Button
                  href={`/characters/${item.id}`}
                  className="botonVer"
                  variant="primary"
                >
                  Ver
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Personajes
