import PropTypes from 'prop-types';
import style from 'components/Statistics/statistics.module.css'

export const Statistics = ({ title, stats }) => {
  //   function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // }
  return (
    <div className={style.statisticsContainer}>
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            className={title ? style.statListItem : style.statListItemNoTitle}
            key={stat.id}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    )
}