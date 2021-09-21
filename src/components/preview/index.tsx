import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ShortQ from 'components/preview/ShortQ'
import MultiChoice from 'components/preview/MultiChoice'
import { ReactComponent as TickerSvg } from 'svgs/ticker.svg';
export default function() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div style={{ padding: 45 }}>
      <div className="image-cover-wrapper">
        <img className="image-cover" />
      </div>
      <div
        className="logo-cover-wrapper"
        style={{
          marginTop: -65,
          marginLeft: 65,
        }}>
        <img className="image-logo" />
      </div>
      <div className="preview-content">
        <p className="preview-title">
          Join the AMA w/ Inpiration4 tourists & scientists on zoom
        </p>
        <p className="preview-description">
          The maestro speaks to Anas Rahman Junaid about his views on entrepreneurship & using art to promote the Indian culture. 
          Stay tuned to watch the video on our Youtube channel. 
          When India hits GDP of $9 trillion in next 10 years, Indian billionaires count will be at more than 500: Anas Rahman Junaid
        </p>
        <ShortQ
          title="What's your full name?"
          type='text'
          required={true} />
        <ShortQ
          title="What's your email?"
          type='email'
          required={true} />
        <MultiChoice
          title="Why do u want to join the show"
          answer={[
            'To ask questions',
            'Just to watch it',
            'Waste your time'
          ]}
          required={false} />
        <Button variant="dark" className="cform-footer-submit">Request Invitation to the show</Button>
        <div className="success-bubble">
          <span><TickerSvg className="icon-sq"/></span>
          <div>
            <p>Your Message has been sent!</p>
            <p>When India hits GDP of $9 trillion in next 10 years, Indian billionaires count will be at more than 500: Anas Rahman Junaid</p>
          </div>
        </div>
      </div>
    </div>
  )
}