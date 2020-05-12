import React from 'react';
import { ChartLabel } from '@patternfly/react-charts';
import propTypes from 'prop-types';
import './_StackChartTemplate.scss';

export const StackChartLabel = ({ link, ...props }) => (
    <a className="pf-c-button pf-m-link pf-m-inline ins-chart-label" href={ link[props.index] }><ChartLabel { ...props }/></a>
);

StackChartLabel.propTypes = {
    link: propTypes.string,
    index: propTypes.number
};

export default StackChartLabel;
