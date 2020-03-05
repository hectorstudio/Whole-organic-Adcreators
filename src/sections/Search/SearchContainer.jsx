import { connect } from 'react-redux';
import { setFilterData } from '../../store/filter/filterActions';
import SearchSection from './SearchSection';

const mapDispatchToProps = {
  setFilterData
};

const SearchContainer = connect(null, mapDispatchToProps)(SearchSection);

export default SearchContainer;
