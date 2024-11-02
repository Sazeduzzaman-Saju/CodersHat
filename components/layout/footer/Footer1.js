import Link from "next/link";
export default function Footer1({ categoryData }) {
  return (
    <>
      <footer className="footer-area padding-top footer-2 cst-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer mr50">
                <Link href="/" className="footer-logo">
                  <img
                    height={50}
                    src={`https://backoffice.codershatbd.com/storage/${categoryData?.site_logo_black}`}
                    alt=""
                  />
                </Link>
                <div className="space20" />
                <p>
                  Transforming Visions into Digital Excellence: Your Partner in
                  IT, Web, Software, and Creative Solutions
                </p>
                <p>
                  {categoryData?.address_line_one} <br />
                  {categoryData?.address_line_two}
                </p>
              </div>
            </div>
            <div className="col-lg col-md-6">
              <div className="single-footer">
                <h3>Learn</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="#">Product</Link>
                    </li>
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Schedule a demo</Link>
                    </li>
                    <li>
                      <Link href="#">Our Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg col-md-6">
              <div className="single-footer">
                <h3>Our Company</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="#">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">User Terms</Link>
                    </li>
                    <li>
                      <Link href="#">Help Centre</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Get in touch</h3>
                <div className="footer-contact">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                    </div>
                    <Link href={`/tel:${categoryData?.primary_phone}` || "/"}>
                      Info: {categoryData?.primary_phone}
                    </Link>
                    <Link href={`/tel:${categoryData?.alternative_phone}` || "/"}>
                      Support: {categoryData?.alternative_phone}
                    </Link>
                  </div>
                </div>
                <div className="footer-contact">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-email2.svg" alt="" />
                    </div>
                    <Link href={`mailto:${categoryData?.contact_email}` || "/"}>
                      {categoryData?.contact_email}
                    </Link>
                    <Link href={`mailto:${categoryData?.support_email}` || "/"}>
                      {categoryData?.support_email}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p>© 2024 Coders Hat. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 text-right">
              <div className="social social2">
                <ul>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      title="Linked in"
                      href={categoryData?.linkedin_url || "/"}
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      title="Facebook"
                      href={categoryData?.facebook_url || "/"}
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      title="Instagram"
                      href={categoryData?.instagram_url || "/"}
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      title="TikTok"
                      href={categoryData?.whatsapp_url || "/"}
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
