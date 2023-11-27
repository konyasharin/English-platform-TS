import "./LastModules.css"
import Block from "./Block";
function LastModules(props){
  return (
    <section className="last-modules container">
      <img src="main/abc.png" alt="abc" className="wow flipInY"/>
      <h2>Последние<br/>
        созданные модули</h2>
      <div className="blocks">
        <Block/>
        <Block/>
        <Block/>
      </div>
    </section>
  )
}
export default LastModules