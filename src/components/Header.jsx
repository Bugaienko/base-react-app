import {Link} from "react-router-dom";

function Header() {
	return (<nav className="blue darken-4">
		<div className="nav-wrapper">
			<a href="https://bugaienko.github.io/spa-router" className="brand-logo right">SPA app</a>
			<ul id="nav-mobile" className="left hide-on-med-and-down">
				<li><a href="https://github.com/Bugaienko/spa-router" target="_blank" rel="noreferrer">Repo</a></li>

			</ul>
		</div>
	</nav>)
}
export {Header};