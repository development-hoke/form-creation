import { useState, useRef } from 'react'
import { Form } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as LongSvg } from 'svgs/long_answer.svg';
import { TextComponent } from 'Reducer'
import AddDialog from 'components/form/adddialog'
interface Props{
  item: TextComponent;
  onDelete: (id: number) => void
  onUpdate: (id: number, item: any) => void
  onEnter: (id: number) => void
  onAdd: (id: number, type: string) => void
}
export default function({
  item,
  onDelete,
  onUpdate,
  onEnter,
  onAdd,
}: Props) {
  const inputRef = useRef(null);

  const [addDialog, showAddDialog] = useState<boolean>(false);

  const updateText = (v: string) => {
    onUpdate(item.id, {
      ...item,
      placeholder: v
    })
  }
  const onKeyEvent = (k: string) => {
    if (k == 'Enter') {
      onEnter(item.id)
    }
  }

  return (
    <div className="cform-text-container">
      <div className="cform-icon-group">
        <TrashSvg onClick={(e) => onDelete(item.id) } />
        <DotsSvg style={{ marginLeft: 15 }} />
        <PlusSvg style={{ marginLeft: 15 }} onClick={() => showAddDialog(true)} />
      </div>
      <div style={{ width: 640 }}>
        <div style={{ width: 648, display: 'inline-block', position: 'relative', marginLeft: 10 }}>
          <Form.Control
            as="textarea"
            className="control-lq"
            value={item.placeholder}
            placeholder="Click to Add placeholder text"
            onChange={(e) => updateText(e.target.value)}
          />
          <LongSvg className="icon-sq"/>
          {item.required && (<div className="control-required">*</div>)}
        </div>
        {addDialog && (
          <OutsideClickHandler
            onOutsideClick={() => showAddDialog(false)}
            display="inline-block"
          >
            <AddDialog onAdd={(type) => {
              showAddDialog(false)
              onAdd(item.id, type)
            }} />
          </OutsideClickHandler>
        )}
      </div>

    </div>
  )
}