import axios from "axios";
import PropTypes from "prop-types";
import Store from "../Redux/Store";

interface IButtonProps {
  text: string;
}

const test = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = await axios.get(url);

  Store.dispatch({ type: "test", payload: { name: response.data } });
};
const Button = ({ text }: IButtonProps) => {
  return (
    <div>
      <button className="my-button" style={buttonStyle} onClick={test}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
Button.defaultProps = {
  text: "Click Me",
};

const buttonStyle = {
  color: "#fff",
  textDecoration: "none",
  background: "#60a3bc",
  padding: "20px",
  borderRadius: "50px",
  display: "inline-block",
  border: "none",
  outline: "none",
};

export default Button;
