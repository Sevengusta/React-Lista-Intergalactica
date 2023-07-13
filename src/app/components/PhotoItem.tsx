import { Photo } from "../types/Photo"

type Props = {
    photo:Photo,
    abrir: () =>void
}



export const PhotoItem = ({photo, abrir}:Props) => {
    return (
        <div onClick={abrir} className="cursor-pointer hover:opacity-80 ">
            <img src={`/assets/${photo.url}`} alt="" className="w-full"/>
        </div>
    )
}