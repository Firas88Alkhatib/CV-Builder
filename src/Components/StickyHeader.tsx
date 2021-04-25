const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <span style={{ fontSize: 18 }}>CV Rakentaja</span>
      <div style={{ float: "left" }}>
        <img alt="Finland flag" style={{ objectFit: "cover", width: 25, height: 15 }} src="suomi.png" />
        <span style={{ marginLeft: 3 }}>Suomi</span>
      </div>
      <div className="sticky-header-line"></div>
    </div>
  );
};
export default StickyHeader;
