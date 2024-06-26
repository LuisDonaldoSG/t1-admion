import TableSection from "@components/homePage/TableSection";
import { UserI } from "@interfaces/user";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
};

async function getPosts() {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();
    return users.data;
};

export default async function Home() {
    const users = await getPosts() as UserI[];

    return (
        <main>
            <TableSection
                data={users}
            />
        </main>
    );
}
