import { Form } from 'react-bootstrap'

import { ReactComponent as TrashSvg } from 'svgs/trash.svg';
import { ReactComponent as DotsSvg } from 'svgs/dots.svg';
import { ReactComponent as PlusSvg } from 'svgs/plus.svg';
export default function() {
  return (
    <div className="cform-text-container">
      <div className="cform-icon-group">
        <TrashSvg />
        <DotsSvg style={{ marginLeft: 15 }} />
        <PlusSvg style={{ marginLeft: 15 }} />
      </div>
      <Form.Control className="cform-text-input" type="text" placeholder="You can add a pharagraph in between though." />
    </div>
  )
}