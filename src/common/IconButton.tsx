interface IconButtonProps {
  className: string;
  imgSrc: string;
  imgAlt: string;
  imgClass: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  className,
  imgSrc,
  imgAlt,
  imgClass,
}) => (
  <button className={className}>
    <img className={imgClass} src={imgSrc} alt={imgAlt} />
  </button>
);

export default IconButton;