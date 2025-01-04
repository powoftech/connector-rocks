import HeaderMobile from '@/app/(platform)/_components/header-mobile'
import NavigationMenuMobile from '@/app/(platform)/_components/navigation-menu-mobile'
import SidebarDesktop from '@/app/(platform)/_components/sidebar-desktop'
import Link from 'next/link'

export default function PlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarDesktop />
      <div className="fixed right-[24px] top-[12px] z-10 flex">
        <Link
          href={'/login'}
          className="border-barcelona-primary-button-background text-system-15-font-size bg-barcelona-primary-button-background text-barcelona-primary-button-text relative m-0 inline-flex h-[36px] min-h-0 min-w-0 max-w-full flex-shrink-0 basis-auto touch-manipulation select-none flex-row items-center justify-center rounded-[10px] border-[1px] px-[16px] py-0 font-semibold transition-transform duration-100 ease-in-out active:scale-[0.96]"
        >
          <div className="overflow-hidden text-ellipsis">Log in</div>
        </Link>
      </div>

      <HeaderMobile />

      <>{children}</>

      <NavigationMenuMobile />
    </>
  )
}
