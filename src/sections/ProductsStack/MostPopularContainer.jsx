import { connect } from "react-redux";
import { setMostPopularData } from "../../store/mostPopular/mostPopularActions";
import MostPopularSection from "./MostPopularSection";

const mapStateToProps = state => {
  return {
    mostPopularData: state.mostPopularReducer.mostPopularData,
    mostPopularTitle: state.mostPopularReducer.mostPopularTitle
  };
};

const mapDispatchToProps = {
  setMostPopularData
};

const DoNotMissContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MostPopularSection);

export default DoNotMissContainer;
