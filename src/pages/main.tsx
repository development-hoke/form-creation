import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import Form from 'components/form'
import Preview from 'components/preview'

export default function() {
  const [currentScreen, setCurrentScreen] = useState<string>('Form');
  return (
    <div>
      <div className="header">
        <Row className="header-row">
          <Col><FontAwesomeIcon icon={faCircle} color="blue" size="2x" /></Col>
          <Col className="header-center">
              <Button
                variant="outline-*"
                className="header-button"
                style={{ opacity: currentScreen === 'Form' ? 1 : 0.4 }}
                onClick={() => setCurrentScreen('Form')}>
                Form
              </Button>
              <Button
                variant="outline-*"
                className="header-button"
                style={{ opacity: currentScreen === 'Responses' ? 1 : 0.4 }}
                onClick={() => setCurrentScreen('Responses')}>
                Responses
              </Button>
              <Button
                variant="outline-*"
                className="header-button"
                style={{ opacity: currentScreen === 'Settings' ? 1 : 0.4 }}
                onClick={() => setCurrentScreen('Settings')}>
                Settings
              </Button>
          </Col>
          <Col>
            <Col className="header-right">
              <Button
                variant="outline-*"
                className="header-button"
                onClick={() => setCurrentScreen('Publish')}>
                Publish
              </Button>
              <Button
                variant="outline-*"
                className="header-button"
                onClick={() => setCurrentScreen('Preview')}>
                Preview Form
              </Button>
              <Button variant="outline-*" className="header-button">
                <FontAwesomeIcon icon={faEllipsisH} />
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
      <div className="body-container">
        {currentScreen === 'Form' && (<Form />)}
        {currentScreen === 'Preview' && (<Preview />)}
      </div>
    </div>
  )
}