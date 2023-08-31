import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://www.linkedin.com/in/prakarsh-bhatia-4272491b7" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Prakarsh Bhatia</a>
            </p>
            <a className="text-dark fs-4" href="https://instagram.com/bhatiaprakarsh?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
           {"  "}
            <a className="text-dark fs-4" href="https://github.com/bhatiaprakarsh?tab=repositories" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            {"   "}
            <a className="text-dark fs-4" href="https://www.youtube.com/@DainikJagran" target="_blank" rel="noreferrer">
              <i className="fa fa-youtube"></i>
            </a>
            <span> </span>
            <span> </span>
            <a className="text-dark fs-4" href="https://www.linkedin.com/in/prakarsh-bhatia-4272491b7" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
