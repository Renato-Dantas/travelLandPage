import image1 from "../../../assets/images/photo1.png";
import image2 from "../../../assets/images/photo2.png";
import image3 from "../../../assets/images/photo3.png";

const PhotoSection = () => {
  return (
    <div className="images-wrapper">
      <div className="column1">
        <img src={image1} alt="Grécia" />
        <img src={image2} className="long-image" alt="Grécia" />
        <div className="float-pink-btn">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.58 3.443a2.578 2.578 0 00-2.574-.671L4.544 9.012c-.971.27-1.66 1.045-1.845 2.029-.19 1.001.473 2.272 1.337 2.803l6.71 4.125a1.739 1.739 0 002.147-.258l7.684-7.732a.979.979 0 011.414 0c.387.39.387 1.02 0 1.423l-7.698 7.734a1.765 1.765 0 00-.257 2.158l4.1 6.778a2.547 2.547 0 002.215 1.261c.106 0 .226 0 .333-.013a2.6 2.6 0 002.174-1.852l6.363-21.435a2.62 2.62 0 00-.64-2.59z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      <div className="column2">
        <img src={image3} alt="Grécia" />
      </div>
    </div>
  );
};

export default PhotoSection;
