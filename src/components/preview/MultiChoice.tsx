interface Props {
  title: string;
  answer: string[];
  required: boolean;
}
export default function({
  title,
  answer,
  required
}: Props) {
  return (
    <div className="control-wrapper">
      <p>{title}</p>
      {answer.map((item, index) => (
        <div key={`mc-${index}`} className="mc-item">
          <div className="mc-item-badge">
            <span>{(index % 26 + 10).toString(36).toUpperCase()}</span>
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}