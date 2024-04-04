import Image from 'next/image'
import logo from '../../../../public/images/b2blue-logo.png'

export default function Logo() {
  return <Image priority src={logo} alt="Logotipo B2Blue" width={90} />
}
