import bannerDesktop from '../../assets/images/banner.mp4';
import bannerMobile from '../../assets/images/banner_mob.mp4';

export const Banner = () => {
  return (
    <div>
      <div style={{ height: '700px' }}>
        <video autoPlay muted loop
          className="w-full h-full object-cover object-left-top md:object-top"
          src={bannerDesktop}
          alt=""
          style={{ width: '100%' }}
        />
        <video autoPlay muted loop
          className="w-full h-full object-cover object-left-top md:object-top"
          src={bannerMobile}
          alt=""
          style={{ width: '100',height: '100%' }}
        />
      </div>
      {/* <style>
        {`
        @media screen and (max-width: 636px) {
          div[style] {
            height: 700px;
          }
          video:first-of-type {
            display: none;
          }
          img:last-of-type {
            display: block;
          }
        }
      `}
      </style> */}
    </div>
  );
};