import { useState, useRef } from 'react'
import { Form } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { CParagraph } from 'Reducer'
import AddDialog from 'components/form/adddialog'
interface Props{
  item: CParagraph;
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
  onAdd
}: Props) {
  const inputRef = useRef(null);

  const [addDialog, showAddDialog] = useState<boolean>(false);

  const updateText = (v: string) => {
    onUpdate(item.id, {
      ...item,
      text: v
    })
  }
  const onKeyEvent = (k: string) => {
    if (k == 'Enter') {
      onEnter(item.id)
    } else if (k == 'Backspace' && item.text == '') {
      onDelete(item.id)
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
        <Form.Control
          as="textarea"
          ref={inputRef}
          className="cform-text-input"
          type="text" 
          placeholder="You can add a pharagraph in between though." 
          value={item.text}
          onChange={(e) => updateText(e.target.value)}
          onKeyDown={(e) => onKeyEvent(e.key)}/>
        {addDialog && (
          <OutsideClickHandler
            onOutsideClick={() => showAddDialog(false)}
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