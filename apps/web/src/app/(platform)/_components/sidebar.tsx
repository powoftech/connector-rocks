import MoreButton from '@/app/(platform)/_components/more-button'
import NavigationMenu from '@/app/(platform)/_components/navigation-menu'
import { LogoDark, LogoLight } from '@/app/_images/logo'
import { InboxIcon } from '@primer/octicons-react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
  alt: string
}

function ThemeImage(props: Props) {
  const { srcLight, srcDark, alt, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className="dark:hidden" alt={alt} />
      <Image {...rest} src={srcDark} className="hidden dark:block" alt={alt} />
    </>
  )
}

export default function Sidebar() {
  return (
    <div className="bg-barcelona-side-navigation-background fixed left-0 top-0 z-10 flex h-screen min-h-[480px] w-[76px] flex-col items-center justify-between overflow-visible backdrop-blur-[15px]">
      <div className="flex-shrink-0 justify-center overflow-hidden py-[14px] transition-transform duration-200 [transition-timing-function:ease-in-out] hover:scale-[1.05] active:scale-[0.98]">
        <Link href={'/'}>
          <ThemeImage
            fetchPriority="high"
            srcLight={LogoLight.default}
            srcDark={LogoDark.default}
            width={32}
            height={32}
            alt="Connector"
          />
        </Link>
      </div>

      <NavigationMenu />

      <div className="mb-[22px] h-fit">
        <div className="group relative">
          <Link
            href={'/inbox'}
            className="relative flex items-center justify-center"
          >
            <div className="flex h-[54px] w-[54px] items-center justify-center transition-transform duration-200 [transition-timing-function:ease-in-out] group-active:scale-90">
              <InboxIcon
                size={24}
                className="fill-barcelona-navigation-icon group-hover:fill-barcelona-primary-icon flex-shrink-0 transition-colors duration-200"
              />
            </div>
          </Link>
        </div>

        <MoreButton />
      </div>
    </div>
  )
}
