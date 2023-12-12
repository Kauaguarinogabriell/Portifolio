export default function Cards(props) {
  return (
    <div className="card center">
      <div className="center" style={{ width: '100%' }}>
        <img src={props.img} alt={props.title} className="icone" />
        <h3 style={{ textAlign: 'center', maxWidth: '15ch' }}>{props.title}</h3>
      </div>
    </div>
  );
}
