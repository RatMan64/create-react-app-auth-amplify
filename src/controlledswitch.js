import Switch from "react-input-switch";
import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";

const Myswitch = React.forwardRef((props, ref) => {
    const [value, setValue] = useState(false);
    return (

        <div ref={ref}>

            <Switch  on={true} off={false} value={value} onChange={setValue} />
        </div>

    )
})
export default Myswitch
