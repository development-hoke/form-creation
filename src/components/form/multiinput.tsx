import { useState, useRef } from 'react'
import { Form } from 'react-bootstrap'
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
import { ReactComponent as DropdownSvg } from 'svgs/dropdown.svg';
import { ReactComponent as CheckSvg } from 'svgs/check.svg';
import { MultiComponent } from 'Reducer'
import AddDialog from 'components/form/adddialog'
interface Props{
  item: MultiComponent;
  onDelete: (id: number) => void
  onUpdate: (id: number, item: any) => void
  onEnter: (id: number) => void
  onAdd: (id: number, type: string) => void
  onDeleteOption: (id: number, opIdx: number, data: MultiComponent) => void
  onUpdateOption: (id: number, opIdx: number, data: MultiComponent, value: string) => void
}
export default function({
  item,
  onDelete,
  onUpdate,
  onEnter,
  onAdd,
  onDeleteOption,
  onUpdateOption
}: Props) {
  const inputRef = useRef(null);

  const [addDialog, showAddDialog] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<string>('');

  const updateText = (v: string) => {
    setNewItem(v);
  }
  const onKeyEvent = (k: string) => {
    if (k == 'Enter') {
      onUpdate(item.id, {
        ...item,
        options: [...item.options, newItem]
      })
      setNewItem('');
    }
  }
  const updateOptionText = (v: string, idx: number) => {
    onUpdateOption(item.id, idx, item, v);
  }

  const iconPadding:{[key:string]: number} = {
    dropdown: 20,
    checkbox: 3,
    radio: 3,
  }

  const iconPaddingOption:{[key:string]: number} = {
    dropdown: 20,
    checkbox: 3,
    radio: 13,
  }

  return (
    <div>
      <div className="cform-text-container">
        <div className="cform-icon-group" style={{ paddingTop: iconPadding[item.type] }}>
          <TrashSvg onClick={(e) => onDelete(item.id) } />
          <DotsSvg style={{ marginLeft: 15 }} />
          <PlusSvg style={{ marginLeft: 15 }} onClick={() => showAddDialog(true)} />
        </div>
        <div style={{ width: 640 }}>
          <div style={{ width: 408, display: 'inline-block', position: 'relative', marginLeft: 10 }}>
            {item.type == 'dropdown' && (
              <>
                <Form.Control
                  className="control-sq"
                  placeholder="Add Option"
                  value={newItem}
                  onChange={(e) => updateText(e.target.value)}
                  onKeyDown={(e) => onKeyEvent(e.key)}
                />
                <DropdownSvg className="icon-sq"/>
              </>
            )}
            {item.type == 'checkbox' && (
              <div className="cform-check-container">
                <CheckSvg />
                <Form.Control
                  className="control-check"
                  placeholder="Add Check Option"
                  value={newItem}
                  onChange={(e) => updateText(e.target.value)}
                  onKeyDown={(e) => onKeyEvent(e.key)}
                />
              </div>
            )}
            {item.type == 'radio' && (
              <Form.Control
                className="control-check"
                placeholder="Click to add label text"
                value={newItem}
                onChange={(e) => updateText(e.target.value)}
                onKeyDown={(e) => onKeyEvent(e.key)}
              />
            )}
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
      {item.options.map((op, idx) => (
        <div className="cform-text-container">
          <div className="cform-icon-group" style={{ paddingTop: iconPaddingOption[item.type] }}>
            <TrashSvg onClick={(e) => onDeleteOption(item.id, idx, item)} />
          </div>
          <div style={{ width: 640 }}>
            <div style={{ width: 408, display: 'inline-block', position: 'relative', marginLeft: 10 }}>
              {item.type == 'dropdown' && (
                <Form.Control
                  className="control-sq"
                  placeholder="Option"
                  value={op}
                  onChange={(e) => updateOptionText(e.target.value, idx)}
                />
              )}
              {item.type == 'checkbox' && (
                <div className="cform-check-container">
                  <CheckSvg />
                  <Form.Control
                    className="control-check"
                    placeholder="CheckBox"
                    value={op}
                    onChange={(e) => updateOptionText(e.target.value, idx)}
                  />
                </div>
              )}
              {item.type == 'radio' && (
                <div className="mc-item">
                  <div className="mc-item-badge">
                    <span>{(idx % 26 + 10).toString(36).toUpperCase()}</span>
                  </div>
                  <Form.Control
                    className="control-check"
                    placeholder="MultiChoice"
                    value={op}
                    onChange={(e) => updateOptionText(e.target.value, idx)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}