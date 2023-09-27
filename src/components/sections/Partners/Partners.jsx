import Link from 'next/link';
import Image from 'next/image';

import nayarLogo from '/public/logos/brands/nayar.svg';

export default function Partners({className, dataSpeed}) {
  return (
    <section
      className={`partners ${className}`}
      data-speed={dataSpeed}
    >
      <div className='partners__container'>
        <Link
          className='partners__link'
          href='https://www.nayarsystems.com/en/'
        >
          <Image src={nayarLogo} alt='Nayar Logo' />
          <span>Nayar UK representatives</span>
        </Link>
      </div>
    </section>
  )
}
