import styles from '@styles/layout/Navbar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@nextui-org/react';
import TitlePage from './TitlePage';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <TitlePage />
            <Button 
                isIconOnly
            >
                <MenuIcon />
            </Button>
        </nav>
    );
}