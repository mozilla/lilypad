import React, { useCallback, useState } from 'react';
import styles from './CopyButton.module.scss';
import Button, { ButtonCategoriesE, ButtonSizesE } from '../Button';

export type CopyButtonPropsT = {
  onClick?: Function;
  successMessage?: string;
  value: string | number;
  classProp?: string;
};

const CopyButton = ({
  onClick,
  successMessage = 'Copied!',
  value,
  classProp = '',
}: CopyButtonPropsT) => {
  const [success, setSuccess] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    onClick && onClick();

    navigator.clipboard.writeText(value.toString()).then(() => {
      startSuccessTimer();
    });
  }, [onClick, value]);

  const startSuccessTimer = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  };

  return (
    <>
      {success ? (
        <div className={styles.success}>{successMessage}</div>
      ) : (
        <Button
          label="copy"
          classProp={classProp}
          onClick={handleClick}
          icon="copy"
          size={ButtonSizesE.SMALL}
          category={ButtonCategoriesE.PRIMARY_CLEAR}
        />
      )}
    </>
  );
};

export default CopyButton;
