import { Form } from "react-bootstrap";
import { ReactComponent as TextSvg } from 'svgs/text.svg';
import { ReactComponent as AddressSvg } from 'svgs/address.svg';
interface Props {
  title: string;
  type: 'text' | 'email';
  required: boolean;
}
export default function({
  title,
  type,
  required
}: Props) {
  return (
    <div className="control-wrapper">
      <div style={{ width: 408, display: 'inline-block', position: 'relative' }}>
        <Form.Control
          className="control-sq"
          placeholder={title}
        />
        {type === 'text' && (<TextSvg className="icon-sq"/>)}
        {type === 'email' && (<AddressSvg className="icon-sq"/>)}
        <div className="control-required">*</div>
      </div>
    </div>
  )
}