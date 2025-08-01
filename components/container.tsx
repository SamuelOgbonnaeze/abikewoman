interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({
    children
}: Readonly<ContainerProps>) => {
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    );
}

export default Container;