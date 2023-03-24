import bannerDesktop from '../../assets/images/banner.png';
import bannerMobile from '../../assets/images/banner-mobile.png';

export const Banner = () => {
  return (
    <div>
      <div style={{ height: '700px' }}>
        <img
          className="w-full h-full object-cover object-left-top md:object-top"
          src={bannerDesktop}
          alt=""
          style={{ width: '100%' }}
        />
        <img
          className="w-full h-full object-cover object-left-top md:object-top hidden"
          src={bannerMobile}
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
          img:first-of-type {
            display: none;
          }
          img:last-of-type {
            display: block;
          }
        }
      `}
      </style>
    </div>
  );
};
