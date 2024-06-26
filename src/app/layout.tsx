import { Inter } from "next/font/google";
import "@styles/globals.css";
import Providers from "@components/layout/Providers";
import { LayoutI } from "@interfaces/props";
import SideBar from "@components/layout/Sidebar";
import styles from '@styles/layout/Layout.module.scss';
import Navbar from "@components/layout/Navbar";
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'tile',
        description: 'description'
    };
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<LayoutI>) {
    return (
        <html lang="en" className="light">
            <body className={`${inter.className} ${styles.layout}`}>
                <SideBar/>
                <Navbar/>
                <main className={styles.main}>
                    <Providers>
                        {children}
                    </Providers>
                </main>
              
            </body>
        </html >
    );
}
