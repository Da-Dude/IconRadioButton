import { Component, ReactNode, createElement } from "react";
import { RadioButton } from "./components/RadioButtonComponent";
import { hot } from "react-hot-loader/root";
import { IconRadioButtonContainerProps } from "../typings/IconRadioButtonProps";

import "./ui/IconRadioButton.css";

class IconRadioButton extends Component<IconRadioButtonContainerProps> {
    render(): ReactNode {
        return <RadioButton 
            displayCaption={this.props.displayCaption} 
            attribute={this.props.radioAttribute} 
            iconMapping={this.props.iconMapping} 
            buttonSize={this.props.buttonSize}
            width={this.props.width}
            height={this.props.height}/>;
    }
}

export default hot(IconRadioButton);
