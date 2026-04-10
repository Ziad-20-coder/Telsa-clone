import DesktopNav from "./Navigations/DesktopNav"
import MobileNav from "./Navigations/MobileNav"

const Navigation = () => {
  return (
    <div>
        <div className="hidden xl:block">
            <DesktopNav />
        </div>
        <div className="block lg:hidden">
            <MobileNav />
        </div>
    </div>
  )
}

export default Navigation