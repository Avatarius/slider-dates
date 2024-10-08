import { IHistoricalData } from '../../utils/types';
import styles from './circle.module.scss';


interface ICircleProps {
  data: IHistoricalData[];
}

function Circle({data} : ICircleProps) {
  const dataArray: IHistoricalData[] = data.length >= 6 ? data.slice(0, 6) : data;
  const buttonsArray = dataArray.map((item, index) => <button key={item.id} className={styles.button}>{index + 1}</button>);

  return (
    <div className={styles.container}>
      {buttonsArray}
    </div>
  )
}

export {Circle};
