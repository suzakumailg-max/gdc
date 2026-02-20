
export default function ConceptText () {
return(
  <div className={styles.sectionWrapper}>
{conceptFirstText.map((item,index)=>(
      <div key={index}>
        <h2>{item.title}</h2>
      {item.lines.map((line,i)=>(
        <p key={i}>{line}</p>
      <Link to="#" className={styles.link}>
        {item.linkText}
        </Link>
      ));};}
</div>);}