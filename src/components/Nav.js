import { Link } from 'react-router-dom';

function Nav() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<a href="##">Filmography</a>
					</li>
					<li>
						<a href="##">Videos</a>
					</li>
					<li>
						<a href="##">Gallery</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
