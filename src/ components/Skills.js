export default function Skill(props) {
  return (
    <div className="habilidade center">
      <img src={props.url} alt={props.alt} className="icones-habilidades" />
      <h2 className="title-habilidades">{props.title}</h2>
    </div>
  );
}
