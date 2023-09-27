import Link from "next/link";

export default function ContactBtn({handleClose}) {
  return (
    <Link
      className='contact__btn'
      href='/contact'
      onClick={handleClose}
    >
      Contact Us
    </Link>
  )
}
