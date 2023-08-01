import Image from 'next/image'
import Link from 'next/link'

export default function ColumnBox(props) {
  return (
    <div id="column-box">
    <Image src={props.icon} width={100} style={{ height: "60%", marginTop: "1vh", marginLeft: "10px"}}></Image>
    <h2 id="column-header">{props.name}</h2>
    <Link href={props.link}>
        <div id="column-link">
            <p>Learn More</p>
        </div>
    </Link>
</div>
  )
}
