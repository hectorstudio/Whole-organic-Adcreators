import { connect } from "react-redux";
import { SideBlocksItem } from "./SideBlocksItem";

const mapStateToProps = state => {
  return {
    cartNumber: state.cartReducer.count
  };
};

const SideBlocksItemContainer = connect(mapStateToProps, null)(SideBlocksItem);

export default SideBlocksItemContainer;
