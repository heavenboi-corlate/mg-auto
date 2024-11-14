import { Wrench } from "lucide-react";

const LoadingSpinner = ({ fadeOut }) => {
	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm ${
				fadeOut ? "animate-fade-out" : ""
			}`}
		>
			<div className="relative">
				<Wrench className="w-12 h-12 text-yellow-400 animate-spin" />
				<div className="absolute top-0 left-0 w-12 h-12 animate-ping">
					<div className="w-full h-full rounded-full bg-yellow-400/20"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
