import React, { useCallback, useState } from 'react';
import styles from './CopyButton.module.scss';
import Button from '../Button';

export type CopyButtonPropsT = {
  onClick?: Function;
  successMessage?: string;
  value: string | number;
  className?: string;
};

const CopyButton = ({
  onClick,
  successMessage = 'Copied!',
  value,
  className = '',
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
          className={className}
          onClick={handleClick}
          icon="copy"
          size="small"
          category="primary_clear"
        />
      )}
    </>
  );
};

export default CopyButton;
