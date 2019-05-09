import React from "react"

import LogoCaballas from "../images/logos/caballas.png"
import LogoCPM from "../images/logos/cpm.png"
import LogoIniciativa from "../images/logos/iniciativa.png"
import LogoIzqAndalucista from "../images/logos/izqandalucista.png"
import VerdesEuropa from "../images/logos/verdeseuropa.png"

class Manifesto extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      textExpanded: false
    }
  }

  toggleText () {
    this.setState({
      textExpanded: !this.state.textExpanded
    })
  }

  render () {
    const textExpanded = this.props.forceTextExpanded ? true : this.state.textExpanded

    return (
      <section className="block manifesto container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="rotated">Manifiesto</h2>
            <div className="manifesto-text">
              <p>Europa era el modelo de esperanza social. Antaño representó todo aquello positivo a lo que aspirábamos: la consolidación de las democracias, la libertad, los derechos civiles, sociales y laborales, el estado del bienestar, la calidad democrática, la prosperidad y la estabilidad económica, la disminución de las desigualdades sociales y territoriales, la preservación del medio ambiente, la lucha contra el cambio climático, la igualdad de mujeres y hombres, sanidad y educación de calidad para todos, la emancipación de los jóvenes, la diversidad cultural, lingüística e identitaria, la ciencia, la creatividad, la tolerancia, la solidaridad, tierra de acogida y la paz permanentes en Europa, incluso en el mundo…</p>
              <p>Este modelo no ha sido capaz de responder a los sectores sociales y territorios más vulnerables de la Unión Europea.</p>
              <p>La Unión Europea ha constituido un modelo económico-social singular fraguado en estos setenta últimos años que defendía el Estado de Bienestar. Sin embargo, las políticas neoliberales, basadas fundamentalmente en planteamientos económicos que se están imponiendo en las últimas décadas, han conseguido desmantelar progresivamente la estructura pública de servicios sociales y ha dado entrada a injusticias y privilegios insoportables.</p>
              <p>Un nuevo poder se está afianzando en la Unión Europea con la connivencia de los gobiernos conservadores, liberales y populistas de sus estados miembros, que trabajan a su servicio en vez del de sus electores y en que la corrupción, las puertas giratorias y la discriminación afloran por doquier.</p>

              <div id="manifestoMore" className="manifesto-text-more" style={{display: textExpanded ? 'block' : 'none'}}>
                <p>Pero es que además, en apenas dos décadas, entre la desinformación, la apatía y la indiferencia inducidas, Europa ha cambiado radicalmente su rumbo y se está colocando en las antípodas de todo lo que en el pasado representó.</p>
                <p>Un poder uniformador, centralista, burocrático, explotador, especulador y carente de consideración por las personas, vivan éstas en Europa o en cualquier parte del mundo.</p>
                <p>Ese nuevo poder consiguió en su día desregular los mercados y desmantelar sus controles, y eso nos ha traído la mayor crisis de la historia contemporánea de Europa, tasas de paro desconocidas desde la Segunda Guerra Mundial, pobreza, injusticia, corrupción, pérdida de derechos sociales y laborales, individuales y colectivos… y el mayor empobrecimiento jamás constatado de las clases medias y trabajadoras en beneficio de unas élites minoritarias.</p>
                <p>Con la bandera de la “austeridad” implantaron un “austericidio” en el que todos los progresos que se habían realizado en todos los órdenes, todas las conquistas sociales, se han detenido y -lo que es inaudito-, están en proceso de desmantelamiento e involución, y no solo en los estados más afectados por la crisis. Como telón de fondo y consecuencia necesaria de todo ello, el fascismo, el autoritarismo y la represión vuelven a mostrarse, cada vez con menos tapujos, en nuestra realidad cotidiana.</p>
                <p>La crisis y el impacto de los recortes vuelven a invisibilizar a las mujeres, como grandes afectadas por los retrocesos en la conquista de sus derechos. La brecha salarial, los recortes en sectores en los que se está destruyendo principalmente empleo femenino, la reforma laboral, la violencia machista, la consideración de incapaces para decidir sobre su sexualidad… cuestiones que colocan a las mujeres en una situación de vulnerabilidad y precariedad que las hace retroceder a posiciones ya conquistadas.</p>
                <p>Esta crisis ha afectado a colectivos tan importantes como los jóvenes que, privados de unas perspectivas laborales dignas, han tenido que emigrar, como nunca se había producido en las últimas décadas, para encontrar un empleo, generando una pérdida de talento y un ahondamiento en los problemas de la despoblación que afecta a buena parte de los territorios europeos frente a los que Europa no ha sido capaz de poner unas medidas eficaces hasta la fecha.</p>
                <p>El fracaso del sueño europeo es claramente perceptible en como  se ha afrontado la crisis de los refugiados. Los conflictos internacionales bélicos, las altas tasas de pobreza y miseria en tantas zonas del planeta han provocado desplazamientos masivos de personas que buscan en Europa el deseo de lograr una vida mejor. Sin embargo, lejos de afrontar este problema como una oportunidad de mostrar al mundo los valores y principios solidarios y democráticos de la UE ha servido para desarrollar políticas de exclusión cuando no xenófobas.</p>
                <p>La construcción europea ha fracasado en lograr una Europa de las personas. Está en nuestra mano darle la vuelta a todo esto. Es hora de retomar el control de Europa de los valores democráticos. Es la hora de impulsar políticas que mejoren los servicios de sanidad, educación y atención social, de hacer un esfuerzo equilibrado en activar la economía y la creación de empleo aprovechando los nuevos sectores y modernizando los clásicos, de fomentar la transferencia de conocimientos y sus aplicaciones y de trabajar la sostenibilidad y sus oportunidades.</p>
                <p>Es la hora de hacer que la adaptación y lucha contra el cambio climático sea una prioridad, como están reclamando las personas más jóvenes con sus movilizaciones en centenares de ciudades de Europa en que piden una respuesta sin más dilaciones a la emergencia climática que garantice nuestro presente y el futuro de las generaciones venideras. Hay que dar a la protección del territorio y la preservación de sus valores naturales, fundamentales para la preservación de la salud de los ecosistemas y de las personas, la relevancia que la ciudadanía reclama consciente de los efectos de la contaminación y la pérdida de calidad ambiental sobre todos los seres vivos. Y, sin más demora, hay que llevar a cabo una transición ecológica de la economía, apostando por sectores innovadores que conjuguen la creación de empleo digno con la adaptación a la naturaleza finita de los recursos del planeta.</p>
                <p>Es la hora de la Europa de las Personas.</p>
                <p>Por estos motivos, las formaciones políticas abajo firmantes se comprometen a recuperar el control desde abajo y poner Europa de nuevo al servicio de las personas acabando con la corrupción y los privilegios, a lograr un modelo social justo para toda la Unión, atendiendo el reconocimiento de la plena capacidad de decisión política de los territorios que la componen, donde la plena igualdad de hombres y mujeres sea realidad, a garantizar la equiparación de los derechos de todas las personas independientemente de su orientación sexual, en la que los jóvenes encuentren su formación y empleo digno, a luchar contra las desigualdades sociales, laborales y los desequilibrios territoriales, a impulsar medidas eficientes contra la despoblación a través del reconocimiento de las singularidades de cada territorio, con especial sensibilidad a las territorios ultraperiféricos como Canarias, a liderar la lucha contra el cambio climático y desarrollar una política exterior con voz propia y diferenciada en el contexto internacional, abogando por la solución dialogada y pacífica de los conflictos, donde los valores solidarios sean la norma de la práctica política y no la excepción en las políticas de la Unión, una Europa con una unidad política necesaria para afrontar los retos del siglo XXI.</p>
                <p>Y para lograrlo se comprometen a configurar una coalición electoral para las próximas Elecciones Europeas, a celebrar en el año 2019, bajos estos principios básicos.</p>
              </div>

              { !this.props.forceTextExpanded ? <button className="btn btn-outline-secondary btn-sm" onClick={() => this.toggleText()} aria-expanded={textExpanded} aria-controls="manifestoMore">{ !textExpanded ? 'Seguir leyendo...' : 'Mostrar menos' }</button> : '' }
            </div>
          </div>
          <div className="col-lg-4">
            <div className="manifesto-sidebar">
              <iframe title="Comprmomís" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoaliciocompromis%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=603979510082106" width="100%" height={70} style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowtransparency allow="encrypted-media"></iframe>
              <iframe title="En Marea" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEnMareaGal%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=603979510082106" width="100%" height={70} style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowtransparency allow="encrypted-media"></iframe>
              <iframe title="Nueva Canarias" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNuevaCanariasLPGC%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=603979510082106" width="100%" height={70} style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowtransparency allow="encrypted-media"></iframe>
              <iframe title="Més per Mallorca" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmespermallorca%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=603979510082106" width="100%" height={70} style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowtransparency allow="encrypted-media"></iframe>
              <iframe title="Chunta Aragonesista" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChunta-Aragonesista-101179693581%2F&tabs&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=603979510082106" width="100%" height={70} style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowtransparency allow="encrypted-media"></iframe>
              <div className="coalition-logos">
                <img src={LogoCaballas} alt="Caballas" />
                <img src={LogoCPM} alt="CPM" />
                <img src={LogoIniciativa} alt="Iniciativa Pueblo Andaluz" />
                <img src={LogoIzqAndalucista} alt="Izquierda Andalucista" />
                <img src={VerdesEuropa} alt="Verdes de Europa" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Manifesto
