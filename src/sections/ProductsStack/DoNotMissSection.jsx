import React, { useEffect } from 'react';
import axios from 'axios';
import SectionItemsContainer from '../../components/ProductsStack/SectionItemsContainer';
import Head from '../../components/ProductsStack/Head';
import './DoNotMissSection.scss';

const DoNotMissSection = ({
  doNotMissTitle,
  doNotMissData,
  setDoNotMissData
}) => {
  useEffect(() => {
    axios
      .get(`/json/getDoNotMiss.json`)
      .then(res => setDoNotMissData(res.data.doNotMiss));
  }, [setDoNotMissData]);

  return (
    <div className="do-not-miss-container">
      <Head title={doNotMissTitle} />
      <SectionItemsContainer sectionData={doNotMissData} />
    </div>
  );
};

export default DoNotMissSection;
