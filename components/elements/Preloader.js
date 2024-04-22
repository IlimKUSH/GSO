export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close"><i className="fi-rr-cross" /></div>
                </div>
                <div className="layer"> </div>
                <div className="animation-preloader">
                    <div className="spinner" />
                </div>
            </div>

        </>
    )
}
