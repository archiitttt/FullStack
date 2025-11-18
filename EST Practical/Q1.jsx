import React, { useState, useMemo } from "react";

const defaultEmployees = [
	"Alice Johnson",
	"Bob Smith",
	"Carol Williams",
	"David Brown",
	"Eve Davis",
	"Frank Harris",
	"Grace Lee",
	"Hector Martinez",
];

export default function App({ employees = defaultEmployees }) {
	const [filter, setFilter] = useState("");

	const normalized = (s) => (s || "").toString().trim().toLowerCase();

	const filtered = useMemo(() => {
		const f = normalized(filter);
		if (!f) return employees;
		return employees.filter((name) => normalized(name).startsWith(f));
	}, [employees, filter]);

	return (
		<div style={{ fontFamily: "sans-serif", padding: 16 }}>
			<h2>Employee Directory</h2>

			<label style={{ display: "block", marginBottom: 8 }}>
				<strong>Filter by name start:</strong>
				<input
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					placeholder="Type to filter e.g. 'a' or 'Al'"
					style={{ marginLeft: 8, padding: 6, fontSize: 14 }}
				/>
			</label>

			<ul>
				{filtered.length === 0 ? (
					<li>No matches</li>
				) : (
					filtered.map((name) => (
						<li key={name} style={{ padding: "4px 0" }}>
							{name}
						</li>
					))
				)}
			</ul>
		</div>
	);
}
