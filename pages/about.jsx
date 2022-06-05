import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function About() {
    return (
        <>
            <h2>This is About Page</h2>
            <h1 className={'title'}>
                Ir a <Link href='/'>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.jsx</code>
            </p>
        </>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
