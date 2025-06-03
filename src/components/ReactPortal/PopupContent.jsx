const PopupContent = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div style={{
          position: "absolute",
          bottom: "3rem",
          backgroundColor: "#dff0d8",
          padding: "0.5rem",
          borderRadius: "5px",
          left: "50%",
          transform: "translateX(-50%)", // Center horizontally
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}>
          Copied to Clipboard
        </div>
      )}
    </section>
  );
};

export default PopupContent;
