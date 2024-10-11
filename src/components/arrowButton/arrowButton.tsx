import { forwardRef } from "react";
import styles from "./arrowButton.module.scss";
import clsx from 'clsx';

interface IArrowButtonProps {
  side: boolean; // false - лево, true - право
  additionalClasses?: string;
  onClick?: () => void;
}

const ArrowButton = forwardRef<HTMLButtonElement, IArrowButtonProps>(({ side, onClick, additionalClasses }, ref) => {

  function handleClick() {
    onClick && onClick();
  }
  const classList = clsx(styles.button, side && styles.button_reversed, additionalClasses && additionalClasses)
  return (
    <button className={classList} onClick={handleClick} ref={ref}/>
  );
})
export { ArrowButton };
