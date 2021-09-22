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
import { ActionType, CParagraph } from 'Reducer'

import Paragraph from 'components/form/paragraph'

export default function() {
  const dispatch = useDispatch();
  const isStart = useGlobalState('isStart');
  const components = useGlobalState('components');
  const footerSumbit = useGlobalState('footerSumbit');
  const maxId = useGlobalState('maxId');

  const [cover, showCover] = useState<boolean>(false);
  const [logo, showLogo] = useState<boolean>(false);
  const [footerSetting, showFooterSetting] = useState<boolean>(false);
  const [fComponents, setFComponents] = useState<CParagraph[]>(components);
  const [started, setStarted] = useState<boolean>(isStart);
  const [nextId, increaseNextId] = useState<number>(maxId);

  const onTitleKeyEvent = (v: string) => {
    if (v === 'Enter') {
      setStarted(true);
      const newItem = {
        id: nextId + 1,
        type: 'paragraph',
        text: ''
      }
      let nc = [];
      if (fComponents.length == 0) nc = [newItem]
      else nc = [newItem, ...fComponents];
      setFComponents(nc);
      increaseNextId((prev) => prev + 1);
    }
  }

  const renderComponents = (item: any) => {
    if (item.type === 'paragraph') {
      return (
        <Paragraph
          item={item}
          onDelete={deleteComponent}
          onUpdate={updateComponent} 
          onEnter={breakLineComponent}/>
      )
    }
  }

  const changeSubmitCaption = (v: string) => {
    dispatch({
      type: ActionType.SET_SUBMIT_STYLE,
      payload: {
        ...footerSumbit,
        caption: v,
      },
    });
  }

  const deleteComponent = (id: number) => {
    setFComponents((prev) => prev.filter((comp) => comp.id != id));
  }

  const updateComponent = (id: number, item: any) => {
    setFComponents((prev) => prev.map((comp) => comp.id == id ? item : comp));
  }

  const breakLineComponent = (id: number) => {
    const itemIdx = fComponents.findIndex((it) => it.id == id);
    if (itemIdx < 0) return;

    const item = fComponents[itemIdx];
    if (item.type === 'paragraph') {
      const newItem = {
        id: nextId + 1,
        type: 'paragraph',
        text: ''
      }
      console.log(itemIdx);
      setFComponents((prev) => itemIdx == 0 ? [...prev, newItem] : prev.splice(itemIdx, 0, newItem));
      increaseNextId((prev) => prev + 1);
    }
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
        <HexSvg
          style={{ opacity: logo ? 0 : 1 }}
          onClick={() => showLogo(true)} />
        <ImageSvg
          style={{ marginLeft: 15, opacity: cover ? 0.3 : 1 }}
          onClick={() => showCover(true)} />
      </div>)}
      <div className="cform-title-wrapper">
        <Form.Control
          className="cform-title"
          type="text"
          placeholder="Give your form a title"
          onKeyPress={(e) => onTitleKeyEvent(e.key)} />
        {!started && (
          <Form.Text className="cform-title-desc">
            Press enter to start using the template
          </Form.Text>
        )}
      </div>
      {fComponents.map((item) => renderComponents(item))}
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