import React from "react";

function Child({ message }) {
	return (
		<div style={{ padding: 8, border: "1px solid #ddd", borderRadius: 6 }}>
			<strong>Child component:</strong>
			<div>{message}</div>
		</div>
	);
}

function Parent({ message }) {
	return (
		<div style={{ padding: 12, background: "#f9f9f9", borderRadius: 8 }}>
			<h3>Parent component</h3>
			<Child message={message} />
		</div>
	);
}

export default function App() {
	const message = "Hello from App (passed through Parent)";

	return (
		<div style={{ fontFamily: "sans-serif", padding: 16 }}>
			<h2>App (root) component</h2>
			<Parent message={message} />
		</div>
	);
}

