import { connect } from 'react-redux';
import {
  setProductsId,
  filterProductsId
} from '../../store/favorits/favoritsActions';
import SectionItems from './SectionItems';

const mapStateToProps = state => {
  return {
    productsIds: state.favoritsReducers.productIds
  };
};

const mapDispatchToProps = {
  setProductsId,
  filterProductsId
};

const SectionItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionItems);

export default SectionItemsContainer;
