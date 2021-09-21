import { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as HexSvg } from 'svgs/hexagon.svg';
import { ReactComponent as ImageSvg } from 'svgs/image.svg';
import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as SettingSvg } from 'svgs/setting.svg';
import { ReactComponent as UploadIconSvg } from 'svgs/upload_icon.svg';
import { useDispatch, useGlobalState } from 'Store'
import { ActionType } from 'Reducer'

export default function() {
  const dispatch = useDispatch();
  const footerSumbit = useGlobalState('footerSumbit');

  const [cover, showCover] = useState<boolean>(false);
  const [logo, showLogo] = useState<boolean>(false);
  const [footerSetting, showFooterSetting] = useState<boolean>(false);

  const changeSubmitCaption = (v : string) => {
    dispatch({
      type: ActionType.SET_SUBMIT_STYLE,
      payload: {
        ...footerSumbit,
        caption: v,
      },
    });
  }

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
          <SettingSvg onClick={() => showFooterSetting((prev) => !prev)} />
        </div>
        <Button
          variant="dark"
          className="cform-footer-submit">
          {footerSumbit.caption}
        </Button>
        {footerSetting && (
          <OutsideClickHandler
            onOutsideClick={() => showFooterSetting(false)}
          >
            <div className="cform-footer-dialog">
              <Form.Text>BUTTON SETTINGS</Form.Text>
              <Form.Control
                type="text"
                placeholder="Change button label"
                className="mv-20-20"
                value={footerSumbit.caption}
                onChange={(e) => changeSubmitCaption(e.target.value)}/>
              <Form.Text>Change button background</Form.Text>
              <InputGroup className="mv-20-10">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="text" />
              </InputGroup>
              <Form.Text>Change button label color</Form.Text>
              <InputGroup className="mv-20-10">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="text" />
              </InputGroup>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  )
}