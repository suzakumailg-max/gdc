import { conceptFirstText } from "./TopConcept";
import { conceptSecondText } from "./TopConcept";

import topFirstImages from "src/assets/images/top-cont1-min.jpg";
import topSecondImages from "src/assets/images/top-cont2-min.jpg";

export default function ConceptFirstText () {
  return(
    <>
    {conceptFirstText.map((item,index)=>(
      <div key={index}>
        <h2>{item.title}</h2>
      {item.lines.map((line,i)=>(
        <p key={i}>{line}</p>
      ))}
      </div>
    ))}
    </>
  );
}

export default function ConceptSecondText (){
  return(
    <>
    <h2>{conceptSecondText.title}</h2>
    <p>{conceptSecondText.text}</p>
    </>
  )
}