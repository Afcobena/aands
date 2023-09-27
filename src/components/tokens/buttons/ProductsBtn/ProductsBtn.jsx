import Link from "next/link";

export default function ProductsBtn({ handleClose }) {
  return (
    <Link
      className='products__btn'
      href='/products'
      onClick={handleClose}
    >
      Our Products
    </Link>
  )
}
