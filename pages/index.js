import NextLink from '../src/components/NextLink'

function Title({ children, as }) {
    const Tag = as;
    return (
        <>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}</style>
        </>
    );
}

export default function Home() {
    return (
        <main>
            <Title as='h1'>Alura Cases - Home Page</Title>
            <NextLink href='/faq'>Ir para a página do FAQ</NextLink>
        </main>
    )
}