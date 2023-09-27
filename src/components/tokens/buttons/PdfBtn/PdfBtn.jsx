export default function PdfBtn(props) {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(props.pdf, '_blank', 'noopener,noreferrer')
  }

  return (
    <button className="pdf__btn" onClick={handleClick}>Download PDF</button>
  )
}
