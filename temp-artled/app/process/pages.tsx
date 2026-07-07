export default function Exhibitions() {
	return (
		<main
			style={{
				minHeight: "100vh",
				display: "grid",
				placeItems: "center",
				background: "#F6EFE8",
				color: "#1B1B1B",
				textAlign: "center",
				padding: "4rem",
			}}
		>
			<div>
				<p
					style={{
						letterSpacing: ".3rem",
						marginBottom: "1rem",
					}}
				>
					ARTIST
				</p>

				<h1
					style={{
						fontSize: "4rem",
						marginBottom: "1rem",
					}}
				>
					Coming Soon
				</h1>

				<p>
					The digital gallery is currently being curated.
				</p>
			</div>
		</main>
	);
}

