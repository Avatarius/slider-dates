import styles from "./arrowButton.module.scss";
import clsx from 'clsx';

interface IArrowButtonProps {
  side: boolean; // false - лево, true - право
}

function ArrowButton({ side }: IArrowButtonProps) {
  return (
    <button className={clsx(styles.button, side && styles.button_reversed)}/>
  );
}
export { ArrowButton };
