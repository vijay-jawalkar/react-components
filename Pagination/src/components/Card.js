export const Card = ({ product }) => {
  const { id, title, thumbnail } = product;

  return (
    <div className="card">
      <img src={thumbnail} alt="product_name" />
      <p> {title} </p>
    </div>
  );
};
