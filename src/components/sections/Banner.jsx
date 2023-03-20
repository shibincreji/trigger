export const Banner = () => {
	return (
		<div>
			<div style={{ height: 700}}>
				<img
					className="w-full h-full object-cover object-left-top md:object-top"
					src={require("../../assets/images/banner.png").default}
					alt=""
					style={{ width: '100%' }}
				/>
			</div>
			<style>
        {`
        @media screen and (max-width: 768px) {
          div[style] {
            height: 500px;
          }
          img {
            object-position: center;
          }
        }
      `}
      </style>
		</div>
	);
};
