import { connect } from 'react-redux';
import { setRecommendedData } from '../../store/recommended/recommendedActions';
import TotalProductsSection from './TotalProductsSection';

const mapStateToProps = state => {
  return {
    recommendedData: state.recommendedReducer.recommendedData,
  };
};

const mapDispatchToProps = {
  setRecommendedData
};

const TotalProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalProductsSection);

export default TotalProductsContainer;
