function List({ people }) {
  return (
    <>
      {people.map((people) => {
        const { id, image, name, date } = people;
        return (
          <div key={id} className="list">
            <img src={image} alt={name} />
            <div className="text">
              <h4>{name}</h4>
              <p>{date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default List;
