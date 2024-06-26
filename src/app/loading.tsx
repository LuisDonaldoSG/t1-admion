import { Progress } from "@nextui-org/react";
import styles from '@styles/layout/Loading.module.scss';

export default function loading() {
    return (
        <Progress className={styles.loading} isIndeterminate size="sm"/>
    );
}