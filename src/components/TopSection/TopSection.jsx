import styles from "./TopSection.module.css";
import { Link } from "react-router-dom";
import { conceptFirstText, conceptSecondText } from "./TopSection.js";



export default function ConceptText () {
return(
  <>
{conceptSecondText.map((item,index)=>(
    <div key={index}  className={styles.sectionContainerOuter}>
      <div>
      <div className={styles.SecondText} style={{flexDirection:item.direction}}>
        <div className={styles.textArea}>
        <h2>{item.title}</h2>
            <p>{item.text}</p>
            <Link to="#" className={styles.sectionLink}>
            {item.linkText}
            </Link>
            </div>
          </div>
          <div className={styles.sectionImageArea}>
        <img src={item.src} alt={item.alt} />
        </div>
      </div>
    </div>
    ))}</>
);}