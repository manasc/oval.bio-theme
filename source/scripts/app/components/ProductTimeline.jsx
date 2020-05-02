import React from "react";
import PropTypes from "prop-types";
import { Waypoint } from "react-waypoint";

import { Tooltip } from "react-tippy";

class ProductTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};

		this.ref = React.createRef();

		this.activate = this.activate.bind(this);
	}

	activate() {
		this.setState({ active: true });
	}

	renderTitle(title, subtitle) {
		return (
			<div className="product w-3/12 px-10">
				<h2 className="text-2xl leading-none text-ovalGreen text-white">
					{title}
				</h2>
				<div className="label plain">
					<span className="label-text">{subtitle}</span>
				</div>
			</div>
		);
	}

	render() {
		const { active } = this.state;
		const { phase, showTitle, title, subtitle } = this.props;
		console.log(this.props);

		return (
			<Waypoint
				onEnter={this.activate}
				topOffset="100px"
				fireOnRapidScroll={false}
				scrollableAncestor="window"
			>
				<div className="py-10 container mx-auto border">
					<div className="flex items-center">
						{showTitle ? this.renderTitle(title, subtitle) : null}
						<div ref={this.ref} className="product-timeline flex-1">
							<div className="relative flex items-center">
								<div
									className={"phase w-1/5 " + (showTitle ? "border-l" : null)}
								>
									<div className="phase-text px-2 pt-12">
										<div className="label plain leading-none">
											<span className="label-text opacity-100">Research</span>
										</div>
									</div>
								</div>
								{[1, 2, 3, 4].map((i) => (
									<div key={i} className="phase w-1/5 border-l">
										<div className="phase-text px-2 pt-12">
											<div className="label plain leading-none">
												<span
													className={
														"label-text " +
														(i + 1 <= phase ? "opacity-100" : "opacity-50")
													}
												>
													<Tooltip title="How does this work?" size="small">
														Phase {i + 1}
													</Tooltip>
												</span>
											</div>
										</div>
									</div>
								))}
								<div className="phase-full border-b w-full absolute" />
								<div
									className="phase-current bg-ovalGreen h-2 rounded-r-full absolute"
									style={{
										transitionDuration: "500ms",
										width: active ? phase * 20 + "%" : "0%",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</Waypoint>
		);
	}
}

ProductTimeline.propTypes = {
	phase: PropTypes.number,
	showTitle: PropTypes.bool,
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default ProductTimeline;
