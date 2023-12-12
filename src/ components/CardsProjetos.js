import Points from '/home/kauag/github/portifolio/src/imagens/icons8-reticências-50.png';
export default function CardProjetos(props) {
  return (
    <div>
      <img src={Points} alt="points" className="points" />
      <img src={props.project} alt={props.altProjet} />
      <h3>{props.title}</h3>
      <div>
        <img src={props.tec1} />
        <img src={props.tec2} />
        <img src={props.tec3} />
      </div>
      <p></p>
    </div>
  );
}
