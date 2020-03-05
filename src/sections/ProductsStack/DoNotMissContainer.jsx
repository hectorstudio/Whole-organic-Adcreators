import { connect } from 'react-redux';
import { setDoNotMissData } from '../../store/doNotMiss/doNotMissActions';
import DoNotMissSection from './DoNotMissSection';

const mapStateToProps = state => {
  return {
    doNotMissData: state.doNotMissReducer.doNotMissData,
    doNotMissTitle: state.doNotMissReducer.doNotMissTitle
  };
};

const mapDispatchToProps = {
  setDoNotMissData
};

const DoNotMissContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoNotMissSection);

export default DoNotMissContainer;
