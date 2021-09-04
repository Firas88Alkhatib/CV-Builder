const Footer = () => {
  return (
    <footer>
      <div className="signature">
        <p style={{ color: 'rgb(37, 184, 105)', textAlign: 'center' }}>
          {'Copyright \u00a9 2020 / Site by '}
          <a
            style={{ color: 'rgb(33, 150, 243)', textDecoration: 'none', textTransform: 'uppercase' }}
            href="https://www.linkedin.com/in/firas-alkhatib-ab97a9195/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {'Firas Alkhatib'}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
