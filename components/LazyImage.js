// components/LazyImage.js
import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

const LazyImage = ({source, style, resizeMode = 'cover', accessibilityLabel}) => {
  return (
    <Image
      source={source}
      style={style}
      resizeMode={resizeMode}
      accessibilityLabel={accessibilityLabel || 'תמונה'}
    />
  );
};

LazyImage.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({uri: PropTypes.string}),
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.any,
  resizeMode: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

export default LazyImage;
