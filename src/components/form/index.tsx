import { useState } from 'react'
import { ReactComponent as HexSvg } from 'svgs/hexagon.svg';
import { ReactComponent as ImageSvg } from 'svgs/image.svg';
import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as SettingSvg } from 'svgs/setting.svg';
import { ReactComponent as UploadIconSvg } from 'svgs/upload_icon.svg';
import { Form, Button } from 'react-bootstrap'

export default function() {
  const [cover, showCover] = useState<boolean>(false);
  const [logo, showLogo] = useState<boolean>(false);
  return (
    <div style={{ padding: 45 }}>
      {cover && (
        <div className="image-cover-wrapper">
          <img className="image-cover" />
          <span className="image-cover-center">
            <ImageSvg style={{ opacity: 0.3, marginRight: 5 }}/>
            Change Cover image
          </span>
        </div>
      )}
      {logo && (
        <div
          className="logo-cover-wrapper"
          style={{
            marginTop: cover ? -65 : 0,
            marginLeft: cover ? 65 : 0,
          }}>
          <img className="image-logo" />
          <span className="image-logo-center"><UploadIconSvg /></span>
        </div>
      )}
      {(!cover || !logo) && (<div className="cform-icon-group">
        <HexSvg style={{ opacity: logo ? 0 : 1 }} onClick={() => showLogo(true)} />
        <ImageSvg style={{ marginLeft: 15, opacity: cover ? 0.3 : 1 }} onClick={() => showCover(true)} />
      </div>)}
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
        <div className="cform-footer-dialog">
          
        </div>
      </div>
    </div>
  )
}