import { memo } from "react"

const Spinner = () => {
    return (
        <>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export default memo(Spinner)