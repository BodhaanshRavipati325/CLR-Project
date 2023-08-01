import Image from 'next/image'
import Link from 'next/link'

export default function RowBox(props) {
    return (
        <Link href={props.link}>
            <div id="row-box">
                <Image src={props.icon} width={50} style={{ height: "60%", marginTop: "1vh", marginLeft: "10px" }}></Image>
                <h2 id="row-header">{props.name}</h2>
            </div>
        </Link>
    )
}
