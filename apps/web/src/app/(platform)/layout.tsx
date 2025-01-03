import Sidebar from '@/app/(platform)/_components/sidebar'

export default function PlatformLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Sidebar />

      {/* Log in Button */}
      {/* <div className="fixed right-[24px] top-[24px] z-10 flex">
        <a
          href="/login"
          className="border-primary-button-background box-border rounded-[10px] border-[1px] border-solid px-[16px] py-0 text-[15px] font-medium leading-[21px]"
        >
          <div className="overflow-hidden text-ellipsis">Log in</div>
        </a>
      </div> */}

      <>{children}</>
    </>
  )
}
