import { connect } from 'react-redux';
import { setRecommendedData } from '../../store/recommended/recommendedActions';
import RecommendedSection from './RecommendedSection';

const mapStateToProps = state => {
  return {
    recommendedData: state.recommendedReducer.recommendedData,
    recommendedTitle: state.recommendedReducer.recommendedTitle
    /*productsIds: state.favoritsReducers.productIds,*/
  };
};

const mapDispatchToProps = {
  setRecommendedData
  /*setProductsId,*/
};

const RecommendedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedSection);

export default RecommendedContainer;
