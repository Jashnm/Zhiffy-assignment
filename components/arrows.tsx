export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        width: "40px",

        height: "40px",
        display: "flex",
        zIndex: "500",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        // display: "block",

        background: "#252525"
      }}
      onClick={onClick}
    ></div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        width: "40px",

        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        zIndex: "500",
        // display: "block",
        background: "#252525"
      }}
      onClick={onClick}
    />
  );
};
