import Header from "@/components/layout/Header";

const Layout = ({
	children,
}: {
	children: Readonly<{ children: React.ReactNode }>;
}) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
