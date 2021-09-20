import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import Form from 'components/form'

export default function() {
  const [currentScreen, setCurrentScreen] = useState<string>('Form');
  return (
    <div>
      <Container className="header">
        <Row className="header-row">
          <Col><FontAwesomeIcon icon={faCircle} color="blue" size="2x" /></Col>
          <Col className="header-center">
              <Button variant="outline-*" className="header-button" style={{ opacity: currentScreen === 'Form' ? 1 : 0.8 }}>
                Form
              </Button>
              <Button variant="outline-*" className="header-button" style={{ opacity: currentScreen === 'Responses' ? 1 : 0.8 }}>
                Responses
              </Button>
              <Button variant="outline-*" className="header-button" style={{ opacity: currentScreen === 'Settings' ? 1 : 0.8 }}>
                Settings
              </Button>
          </Col>
          <Col>
            <Col className="header-right">
              <Button variant="outline-*" className="header-button">Publish</Button>
              <Button variant="outline-*" className="header-button">Preview Form</Button>
              <Button variant="outline-*" className="header-button">
                <FontAwesomeIcon icon={faEllipsisH} />
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
      <div className="divider"></div>
      <Container className="body-container">
        <Form />
      </Container>
    </div>
  )
}