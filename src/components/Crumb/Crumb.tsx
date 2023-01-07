import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Crumb.module.scss';
import CrumbMessage from './CrumbMessage';

export type CrumbPropsT = {
  classProp?: string;
};

export type CrumbInterfaceT = {
  dispatchCrumb: Function;
};

export enum CrumbTypesE {
  NEUTRAL = 'neutral',
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum CrumbLocationE {
  TOP_RIGHT = 'top_right',
  TOP_LEFT = 'top_left',
  BOTTOM_RIGHT = 'bottom_right',
  BOTTOM_LEFT = 'bottom_left',
}

export type NewCrumbT = {
  description: string;
  duration?: number;
  autoClose?: boolean;
  type?: CrumbTypesE;
  location?: CrumbLocationE;
  pauseOnHover?: boolean;
};

export interface CrumbI extends NewCrumbT {
  id: string;
}

const Crumb = forwardRef(({ classProp = '' }: CrumbPropsT, ref) => {
  const [topRightCrumbs, setTopRightCrumbs] = useState<CrumbI[]>([]);
  const [topLeftCrumbs, setTopLeftCrumbs] = useState<CrumbI[]>([]);
  const [bottomRightCrumbs, setBottomRightCrumbs] = useState<CrumbI[]>([]);
  const [bottomLeftCrumbs, setBottomLeftCrumbs] = useState<CrumbI[]>([]);
  /**
   * Exposed Component API
   */
  useImperativeHandle(ref, (): CrumbInterfaceT => {
    return {
      dispatchCrumb: dispatchCrumb,
    };
  });

  /**
   * Dispatch Crumb
   * @param newCrumb
   */
  const dispatchCrumb = (newCrumb: NewCrumbT) => {
    // Give Crumb an ID
    const crumb = {
      ...newCrumb,
      id: String(Date.now()),
    };

    switch (crumb.location) {
      case CrumbLocationE.TOP_RIGHT:
        setTopRightCrumbs((crumbs) => [crumb, ...crumbs]);
        break;

      case CrumbLocationE.TOP_LEFT:
        setTopLeftCrumbs((crumbs) => [crumb, ...crumbs]);
        break;

      case CrumbLocationE.BOTTOM_RIGHT:
        setBottomRightCrumbs((crumbs) => [crumb, ...crumbs]);
        break;

      case CrumbLocationE.BOTTOM_LEFT:
        setBottomLeftCrumbs((crumbs) => [crumb, ...crumbs]);
        break;

      default:
        setTopRightCrumbs((crumbs) => [crumb, ...crumbs]);
        break;
    }
  };

  /**
   * Filter Out Crumb
   * @param crumbs
   * @param id
   * @returns  CrumbI[]
   */
  const filterCrumbs = (crumbs: CrumbI[], id: string) =>
    crumbs.filter((crumb) => crumb.id != id);

  /**
   * Remove Crumb form state
   * @param id
   * @param location
   */
  const selfDestruct = (id: string, location: CrumbLocationE) => {
    switch (location) {
      case CrumbLocationE.TOP_RIGHT:
        setTopRightCrumbs((state) => filterCrumbs(state, id));
        break;

      case CrumbLocationE.TOP_LEFT:
        setTopLeftCrumbs((state) => filterCrumbs(state, id));
        break;

      case CrumbLocationE.BOTTOM_RIGHT:
        setBottomRightCrumbs((state) => filterCrumbs(state, id));
        break;

      case CrumbLocationE.BOTTOM_LEFT:
        setBottomLeftCrumbs((state) => filterCrumbs(state, id));
        break;

      // Default to Top Right
      default:
        setTopRightCrumbs((state) => filterCrumbs(state, id));
        break;
    }
  };

  /**
   * Get Crumb JSX
   * @param crumb
   * @returns JSX
   */
  const renderCrumb = (crumb: CrumbI) => {
    return (
      <CrumbMessage selfDestruct={selfDestruct} key={crumb.id} {...crumb} />
    );
  };

  return (
    <div id="lily_crumb" className={classProp}>
      {/* TOP RIGHT  */}
      {Boolean(topRightCrumbs.length) && (
        <div className={styles.top_right}>
          {topRightCrumbs.map(renderCrumb)}
        </div>
      )}

      {/* TOP LEFT  */}
      {Boolean(topLeftCrumbs.length) && (
        <div className={styles.top_left}>{topLeftCrumbs.map(renderCrumb)}</div>
      )}

      {/* BOTTOM RIGHT  */}
      {Boolean(bottomRightCrumbs.length) && (
        <div className={styles.bottom_right}>
          {bottomRightCrumbs.map(renderCrumb)}
        </div>
      )}

      {/* BOTTOM LEFT  */}
      {Boolean(bottomLeftCrumbs.length) && (
        <div className={styles.bottom_left}>
          {bottomLeftCrumbs.map(renderCrumb)}
        </div>
      )}
    </div>
  );
});

Crumb.displayName = 'Crumb';
export default Crumb;
