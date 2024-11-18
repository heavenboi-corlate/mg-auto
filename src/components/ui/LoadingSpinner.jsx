import { Wrench } from "lucide-react";

const LoadingSpinner = ({ fadeOut }) => {
	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm transition-all duration-300 ${
				fadeOut ? "animate-fade-out" : "animate-fade-in"
			}`}
		>
			<div className="relative">
				<Wrench className="w-12 h-12 text-red-400 animate-spin transition-transform duration-700 hover:scale-110" />
				<div className="absolute top-0 left-0 w-12 h-12 animate-ping">
					<div className="w-full h-full rounded-full bg-yellow-400/20 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export { LoadingSpinner };
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div */
