import styles from "./arrowButton.module.scss";
import clsx from 'clsx';

interface IArrowButtonProps {
  side: boolean; // false - лево, true - право
  onClick?: () => void;
}

function ArrowButton({ side, onClick }: IArrowButtonProps) {
  function handleClick() {
    onClick && onClick();
  }
  return (
    <button className={clsx(styles.button, side && styles.button_reversed)} onClick={handleClick}/>
  );
}
export { ArrowButton };
