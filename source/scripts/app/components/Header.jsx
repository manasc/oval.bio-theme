import React from "react";
import PropTypes from "prop-types";
import apiFetch from "@wordpress/api-fetch";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			banner: {
				show: true,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consequuntur vero voluptatem dolores, assumenda adipisci debitis voluptates fugiat saepe nobis et voluptas a eius explicabo",
			},
			navbar: {
				links: [],
				logo: [],
			},
			mobileMenu: false,
			height: null,
		};

		this.mainHeader = React.createRef();
		this.fauxHeader = React.createRef();

		this.renderBanner = this.renderBanner.bind(this);
		this.toggleBanner = this.toggleBanner.bind(this);
	}

	renderBanner() {
		if (this.state.banner.show) {
			return (
				<div
					id="header-banner"
					className="banner bg-ovalGreen hover:bg-ovalGreenLight cursor-pointer text-sm text-gray-800 py-3 text md:py-2 px-6"
				>
					<div className="container mx-auto">
						<div className="flex -mx-2">
							<span className="w-full truncate">
								{this.state.banner.description}
							</span>
							<div
								id="close-header-banner"
								className="close px-2 text-gray-700 hover:text-gray-800"
								onClick={() => this.toggleBanner()}
							>
								<div className="fas fa-times-circle" />
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}

	toggleBanner() {
		this.setState({ banner: { show: !this.state.banner.show } });
		// this.updateHeight();
		console.log(this.mainHeader);
	}

	updateHeight() {
		this.fauxHeader.current.style.height =
			this.mainHeader.current.offsetHeight + "px";
	}

	componentDidMount() {
		this.updateHeight();

		apiFetch({ path: "/wp/v2/posts" }).then((posts) => {
			console.log(posts);
		});
	}

	componentDidUpdate() {
		this.updateHeight();
	}

	render() {
		// const { banner, navbar } = this.state;
		const { navigation } = this.props;

		// parse string
		const menu = JSON.parse(navigation);

		return (
			<React.Fragment>
				<header
					id="main-header"
					className="fixed top-0 left-0 w-full z-50"
					ref={this.mainHeader}
				>
					{this.renderBanner()}
					<div
						id="header-navbar"
						className="bg-gray-800 text-sm text-sm text-white py-3 md:py-2 px-6"
					>
						<div className="flex items-center">
							<div className="w-1/3 left-menu hidden lg:block">
								<ul className="flex items-center -mx-2">
									{menu.map((x) => (
										<li
											key={x.name}
											className="px-2 opacity-75 hover:opacity-100"
										>
											<a
												href={x.url}
												className="font-medium"
											>
												{x.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="w-1/3 left-menu-mobile block lg:hidden">
								<ul className="flex items-center -mx-1">
									<li className="px-1 leading-none">
										<a
											className="font-medium text-ovalGreen"
											href="#"
										>
											<i className="fas fa-bars text-lg" />
										</a>
									</li>
								</ul>
							</div>
							<div className="w-1/3 text-center">
								<span className="text-ovalGreen font-bold text-2xl">
									oval.bio
								</span>
							</div>
							<div className="w-1/3 right-menu text-right hidden lg:block">
								<ul className="flex items-center justify-end -mx-1">
									<li className="px-1 leading-none">
										<div className="badge bg-ovalGreen h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
											<span
												id="initials"
												className="absolute"
											>
												<i className="fas fa-user" />
											</span>
										</div>
									</li>
									<li className="px-1 leading-none">
										<div className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
											<span
												id="cartCount"
												className="absolute"
											>
												2
											</span>
										</div>
									</li>
									<li className="px-1 leading-none">
										<div className="badge bg-ovalGreen h-8 px-5 w-auto rounded-full relative text-gray-700 font-bold flex items-center justify-center">
											<span className="leading-inherit">
												Shop
											</span>
										</div>
									</li>
								</ul>
							</div>
							<div className="w-1/3 right-menu text-right block lg:hidden">
								<ul className="flex items-center justify-end -mx-1">
									<li className="px-1 leading-none">
										<div className="badge bg-white h-8 w-8 rounded-full relative text-gray-700 font-bold flex items-center justify-center">
											<span
												id="cartCount"
												className="absolute"
											>
												2
											</span>
										</div>
									</li>
									<li className="px-1 leading-none">
										<a
											className="font-medium text-ovalGreen"
											href="#"
										>
											<i className="fas fa-shopping-cart text-lg" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
				<div
					id="faux-header"
					ref={this.fauxHeader}
					className="relative"
					style={{
						height: this.state.height,
					}}
				/>
				<div className="mobile-menu" />
			</React.Fragment>
		);
	}
}

// check prop types
Header.propTypes = {
	navigation: PropTypes.string,
};

export default Header;
