const ScreenComponenet = (props) => {
  const componentStyle = {
    transform: `translate(${props.offsetX}, ${props.offsetY})`,
  };
  if (props.position) {
    componentStyle["position"] = props.position;
  }
  return (
    <div className="screen__container" style={componentStyle}>
      <div className="screen__navigation">
        <div className="screen__buttons_group"></div>
        <p>{props.name}</p>
        <div className="screen__buttons_group">
          <div className="screen__button"></div>
          <div className="screen__button"></div>
        </div>
      </div>
      <div className="screen__inner_container">
        <div className="screen__content">{props.inner}</div>
      </div>
    </div>
  );
};
export default ScreenComponenet;
