import styles from '@styles/layout/Sidebar.module.scss';
import Image from 'next/image';
import T1EnviosLogo from '@assets/T1envios-blanco.svg';
import Link from 'next/link';
import { HOME_PATH } from '@utils/paths';
import { paginatedPaths } from '@utils/paginatedPaths';
import LinkItem from './LinkItem';

export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <Link href={HOME_PATH}>
                <Image 
                    src={T1EnviosLogo}
                    alt='t1 envios'
                    width={130}
                    height={32}
                />
            </Link>
            <div className='flex gap-2 flex-col mt-10'>
                {
                    Object.keys(paginatedPaths).map((link, index) => (
                        <LinkItem 
                            key={index}
                            dataLink={paginatedPaths[link]}
                            nameForSubPath={link}
                        />
                    ))
                }
            </div>
        </aside>
    );
}