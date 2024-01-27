interface ItemType {
  icon: string;
  title: string;
  content: string;
}

const Icon = ({ id }: { id: string }) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${id}`}></use>
    </svg>
  );
};

const AboutItem = ({ icon, title, content }: ItemType) => {
  return (
    <>
      <Icon id={icon} />
      <h3 className="text-2xl font-semibold text-[#37474F] my-2">{title}</h3>
      <p className="text-sm text-[#37474FBF]">{content}</p>
    </>
  );
};

export default AboutItem;
