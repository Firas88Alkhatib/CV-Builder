const Footer = () => {
  return (
    <div className="signature">
      <p style={{ color: "rgb(37, 184, 105)", textAlign: "center" }}>
        {"Created By "}
        <a
          style={{ color: "rgb(33, 150, 243)", textDecoration: "none", textTransform: "uppercase" }}
          href="https://www.linkedin.com/in/firas-alkhatib-ab97a9195/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"( Firas Alkhatib )"}
        </a>
      </p>
    </div>
  );
};

export default Footer;
