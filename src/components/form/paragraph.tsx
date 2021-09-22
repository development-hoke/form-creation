import { useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'

import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { CParagraph } from 'Reducer'
interface Props{
  item: CParagraph;
  onDelete: (id: number) => void
  onUpdate: (id: number, item: any) => void
  onEnter: (id: number) => void
}
export default function({
  item,
  onDelete,
  onUpdate,
  onEnter
}: Props) {

  const updateText = (v: string) => {
    onUpdate(item.id, {
      ...item,
      text: v
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
        <PlusSvg style={{ marginLeft: 15 }} />
      </div>
      <Form.Control
        autoFocus
        className="cform-text-input"
        type="text" 
        placeholder="You can add a pharagraph in between though." 
        value={item.text}
        onChange={(e) => updateText(e.target.value)}
        onKeyPress={(e) => onKeyEvent(e.key)}/>
    </div>
  )
}