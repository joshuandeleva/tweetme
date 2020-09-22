import React from "react";
import "./SideBarOption.css";
//pass the props in the function
function SideBarOption({ active, Icon, title }) {
	return (
		<div className={`sidebarOption ${active && "sidebarOption--active"}`}>
			<Icon className="sidebarOption__Icon" />
			<h2 className="sidebarOption__title">{title}</h2>
		</div>
	);
}

export default SideBarOption;
