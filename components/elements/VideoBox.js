import { useState } from "react"
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"
export default function VideoBox() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className="lightbox-image"><i className="fi-rr-play" /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
