import LogoSlider1 from "@/components/slider/LogoSlider1"


export default function Logo() {
    return (
        <>
            <div className="logo-area section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="heading text-center">
                                <h1>Trusted by</h1>
                                <h5>more than 400+ companies worldwide</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <LogoSlider1 />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
