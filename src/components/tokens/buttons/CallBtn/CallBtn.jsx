import Link from 'next/link';

export default function CallBtn(props) {
  const { tel, text } = props;
  return (
    <div className='callbtn'>
      <Link href={tel}>
        <span>{text}</span>
      </Link>
    </div>
  )
}
