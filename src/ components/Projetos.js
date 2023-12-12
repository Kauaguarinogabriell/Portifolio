import CardProjetos from './CardsProjetos';
export default function Projetos() {
  return (
    <section
      className="container center"
      style={{ backgroundColor: '#34353C' }}
    >
      <h1>Meus Projetos</h1>
      <div>
        <CardProjetos />
      </div>
    </section>
  );
}
