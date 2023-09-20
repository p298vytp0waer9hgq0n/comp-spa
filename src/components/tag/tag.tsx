import { tagStyles } from '../../utils/constants';
import styles from './tag.module.css';

export default function Tag({ tag }: { tag: string }) {
  return (
    <span className={styles.tag} style={tagStyles[tag] || tagStyles.default}>
      {tag}
    </span>
  );
}
