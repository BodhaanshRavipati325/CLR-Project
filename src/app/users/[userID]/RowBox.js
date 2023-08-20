import Image from "next/image";
import Link from "next/link";

export default function RowBox(props) {
    return (
        <div id="row-box">
            <Link href={props.link}>
                <Image
                    src={props.icon}
                    width={40}
                    style={{ height: "60%", marginTop: "1vh", marginLeft: "10px" }}
                ></Image>
                <h2 id="row-header">{props.name}</h2>
            </Link>

            {props.children}
        </div>
    );
}
