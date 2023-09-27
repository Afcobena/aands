import Link from "next/link";

export default function DetailsBtn(props) {
  const {link} = props;

  return (
    <Link className='details__btn' href={link}>
      <span>View Details</span>
    </Link>
  )
}