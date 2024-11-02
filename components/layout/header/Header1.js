import Link from "next/link";
import Menu from "../Menu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  categoryData,
}) {
  return (
    <>
      <header
        id="header"
        className={`header header-2 header-absolute d-none d-lg-block ${
          scroll ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-elements">
                <div className="header_menu_area">
                  <div className="logo">
                    <Link href="/">
                      <img
                        height={80}
                        src={`https://backoffice.codershatbd.com/storage/${categoryData?.site_logo_black}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <div className="menu-wrap me-auto">
                      <Menu />
                    </div>
                  </div>
                </div>
                <div className="desktop-info">
                  <div className="quick_contact">
                    <div className="quick_contact_icon bg-27">
                      <i className="fa-light fa-phone" />
                    </div>
                    <div className="quick_contact_content">
                      <small>{categoryData?.contact_email}</small>
                      <Link href={`mailto:${categoryData?.primary_phone}` || "/"}>
                        {categoryData?.primary_phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
