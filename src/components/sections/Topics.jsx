import { Container } from "../Container";

export const Topics = () => {
	return (
		<section className="bg-gray-100 py-24">
			<Container className="space-y-14">
				<div className="max-w-screen-lg mx-auto text-center space-y-6">
					<h1 className="text-3xl text-blue-700 font-semibold">Technologies</h1>
					<p className="text-gray-500 text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						voluptatem, vero iusto quo distinctio nesciunt aut obcaecati sunt?
						Tempore suscipit magnam fugit sint, minima aliquid adipisci veniam
						error quas facilis?
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
					<a
						className="flex flex-col items-center justify-center space-y-6"
						href="https://developer.android.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="w-28"
							src="https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
							alt=""
						/>
						<div className="text-lg text-blue-700">Android</div>
					</a>
					<a
						className="flex flex-col items-center justify-center space-y-6"
						href="https://cloud.google.com/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="w-28"
							src="https://lirp.cdn-website.com/aa0ef369/dms3rep/multi/opt/google-cloud-icon-400w.png"
							alt=""
						/>
						<div className="text-lg text-blue-700">Google Cloud</div>
					</a>
					<a
						className="flex flex-col items-center justify-center space-y-6"
						href="https://www.tensorflow.org/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="w-28"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
							alt=""
						/>
						<div className="text-lg text-blue-700">Tensorflow</div>
					</a>
					<a
						className="flex flex-col items-center justify-center space-y-6"
						href="https://web.dev/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="w-28"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/2048px-Google_Chrome_icon_%28September_2014%29.svg.png"
							alt=""
						/>
						<div className="text-lg text-blue-700">Web</div>
					</a>
				</div>
			</Container>
		</section>
	);
};
