import LazyImage from '../components/LazyImage';
import React from 'react';

export default function LazyCachedImage({ uri, style }) {
  return <LazyImage source={{ uri }} style={style} />;
}
