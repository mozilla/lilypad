import React from 'react';
import PropTypes from 'prop-types';
import { BadgeCategoriesE } from '../../types/General';
import styles from './Badge.module.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.oneOf([
    BadgeCategoriesE.PRIMARY,
    BadgeCategoriesE.SECONDARY,
  ]),
  classProp: PropTypes.string,
};

type BadgePropsT = PropTypes.InferProps<typeof propTypes>;

const Badge = ({
  name,
  category = BadgeCategoriesE.PRIMARY,
  classProp = '',
}: BadgePropsT) => {
  return (
    <span
      className={`
       ${styles['badge_' + category]} 
       ${classProp}`}
    >
      {name}
    </span>
  );
};

Badge.propTypes = propTypes;

export default Badge;
