import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import imagen from '../image/inicio.png'

const Episodios = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  //   console.log(todos)

  const obtenerDatos = async () => {
    const data = await fetch('https://api.sampleapis.com/futurama/episodes')
    const users = await data.json()
    //   console.log(users)
    setTodos(users)
  }

  return (
    <>
      <h1>Episodios</h1>
      <div className="container-personajes">
        {todos.map((item) => (
          <Card className="card-todos" key={item.id}>
            <Row>
              <Col xs={12} sm={14}>
                <img src={imagen} width="230" height="260" />
                <hr />
                <h6>{item.title}</h6>
                <Button
                  href={`/episodes/${item.id}`}
                  className="botonInfo"
                  variant="primary"
                >
                  +Info
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Episodios
