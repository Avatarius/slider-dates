import styles from './eventCard.module.scss';

interface IEventCardProps {
  year: number;
  description: string;
}

function EventCard({year, description} : IEventCardProps) {
  return (
    <article className={styles.container}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export {EventCard};
