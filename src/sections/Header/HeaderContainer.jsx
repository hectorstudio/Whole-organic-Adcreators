import { connect } from "react-redux";
import { setCountValue } from "../../store/cart/cartActions";
import { HeaderSection } from "./HeaderSection";

const mapDispatchToProps = {
  setCountValue
};

const HeaderContainer = connect(null, mapDispatchToProps)(HeaderSection);

export default HeaderContainer;
