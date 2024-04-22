import { useState } from 'react'
export default function QuantityInput() {
    const [value, setValue] = useState(1)

    const handleUpClick = () => {
        setValue(value + 1)
    }

    const handleDownClick = () => {
        setValue(value - 1)
    }

    return (
        <>

            <div className="quantity">
                <label className="screen-reader-text" htmlFor="quantity_637c662a50dfa">Quantity</label>
                <input type="button" value="-" className="qty_button minus" onClick={handleDownClick} />
                <input type="number" id="quantity_637c662a50dfa" className="input-text qty text" min={1} name="quantity" inputMode="numeric" value={value} onChange={(e) => setValue(e.target.value)} />
                <input type="button" value="+" className="qty_button plus" onClick={handleUpClick} />
            </div>
        </>
    )
}