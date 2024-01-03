type Props = {
  list: any[];
};

function HomeList({ list }: Props) {
  return list.map((item) => {
    <div>
      <p>{item.title}</p>
      <p>{item.subtitle}</p>
    </div>;
  });
}

export default HomeList;
