import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>Logo</div>
      <nav>
        <div className={styles.folder}>Дашборд</div>
        <div className={styles.folder}>
          <NavLink className={styles['folder-link']} to="/cmdb">
            CMDB
          </NavLink>
          <NavLink className={styles.link} to="/">
            Серверы и ПК
          </NavLink>
          <NavLink className={styles.link} to="/somewhere">
            Гипервизоры и виртуальные машины
          </NavLink>
          <NavLink className={styles.link} to="/somewhere">
            Принтеры и МФУ
          </NavLink>
          <NavLink className={styles.link} to="/somewhere">
            Сетевые устройства
          </NavLink>
        </div>
        <div className={styles.folder}>Сеть</div>
        <div className={styles.folder}>Справочники</div>
        <div className={styles.folder}>Отчёты</div>
        <div className={styles.folder}>Мониторинг</div>
        <div className={styles.folder}>Автоматизация</div>
        <div className={styles.folder}>Администрирование</div>
      </nav>
    </div>
  );
}
