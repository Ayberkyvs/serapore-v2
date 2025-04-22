const BackgroundImageWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<div className="bg_gradient_down min-h-[100vh]">{children}</div>
		</>
	);
};

export default BackgroundImageWrapper;
