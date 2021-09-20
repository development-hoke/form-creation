import { ReactComponent as HexSvg } from 'svgs/hexagon.svg';
import { ReactComponent as ImageSvg } from 'svgs/image.svg';
import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as SettingSvg } from 'svgs/setting.svg';
import { Form, Container, Button } from 'react-bootstrap'

export default function() {
  return (
    <div style={{ padding: 45 }}>
      <div className="cform-icon-group">
        <HexSvg />
        <ImageSvg style={{ marginLeft: 15 }} />  
      </div>
      <div className="cform-title-wrapper">
        <Form.Control className="cform-title" type="text" placeholder="Give your form a title" />
        <Form.Text className="cform-title-desc">Press enter to start using the template</Form.Text>
      </div>
      <div className="cform-icon-group">
        <TrashSvg />
        <DotsSvg style={{ marginLeft: 15 }} />
        <PlusSvg style={{ marginLeft: 15 }} />
      </div>
      <div className="cform-footer">
        <div className="cform-icon-group">
          <SettingSvg />
        </div>
        <Button variant="dark" className="cform-footer-submit">Submit</Button>
      </div>
    </div>
  )
}