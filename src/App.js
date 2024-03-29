import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";
import './App.css';
 
export default function ColorPickerGfg() {
    const [color, setColor] = 
        useColor("hex", "#121212");
 
    return (
        <div>
            <h1>Color Picker With React</h1>
            <ColorPicker width={456} height={228}
                color={color}
                onChange={setColor} hideHSV dark />

                <p> Develop by Shahriar Mahmud Anik</p>
        </div>



    )
};