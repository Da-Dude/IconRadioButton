import { Component, ReactNode, createElement, MouseEvent, CSSProperties } from "react";
import { EditableValue, ValueStatus } from "mendix";
import { IconMappingType, ButtonSizeEnum } from "../../typings/IconRadioButtonProps";
import { Icon } from "mendix/components/web/Icon";


export interface RadioButtonProps {
    attribute: EditableValue<string>;
    iconMapping: IconMappingType[];
    displayCaption: boolean;
    buttonSize: ButtonSizeEnum;
    width: number;
    height: number;
}

export class RadioButton extends Component<RadioButtonProps> {
    render(): ReactNode {
    const {attribute, displayCaption,buttonSize,width,height} = this.props;
    
    //Set styles for flex and fixed
    const _flexStyle : CSSProperties ={
        flex: 1,
    }
    
    
    const _fixedStyle : CSSProperties ={
        width: width+"px",
        height: height+"px",
    }
    
    //Assign the correct styling
    const _style = buttonSize == "flex" ? _flexStyle : ( buttonSize == "fixed" ? _fixedStyle : undefined )
        
        return <div className="icon-radiobutton">
            {attribute.universe?.map(option => (
                <div data-key={option} className={attribute.value == option? "card selected" : "card"} style={_style} onClick={this.handleClick}>
                    {this.renderIcon(option)}
                    { displayCaption ? <label>{attribute.formatter.format(option)}</label> : null }
                </div>
            ))}            
        </div>;
    }
    
    private renderIcon = (enumValue: string): ReactNode => {
    
        //Assign icon to be as selected (match-up on enum value)
        const icon= this.props.iconMapping.find(myObj => myObj.enumValue == enumValue);
        
        return (icon && icon.enumIcon.status === ValueStatus.Available) ? <Icon icon={icon.enumIcon.value}/> : <Icon/>;
    }
    
    private handleClick = (e: MouseEvent) => {
        "use strict";
    
        //Prevent event propagation 
        e.preventDefault();
        
        //Get target
        const _eventTarget = e.target as HTMLElement;
        //If the event is triggered on a child, assign the target to the parent.
        const _divTarget = _eventTarget.nodeName == 'DIV' ? _eventTarget : _eventTarget.parentElement;
        
        //Ensure the target exists
        if(_divTarget)
        {
            //Get all siblings (Icon Buttons)
            var siblings = _divTarget.parentElement?.children;
            
            //Remove selected class from all icon buttons
            if(siblings)
                for (const item of Array.from(siblings)){
                    if(item!=_divTarget)
                        item.classList.remove('selected');
                }
            //Add selected class to the clicked button
            _divTarget.classList.add('selected');
            
            //Get attribute value from button
            var _newAttribute = _divTarget.attributes.getNamedItem("data-key")?.value;
            
            //Apply value to attribute
            if(_newAttribute)
            {
                this.props.attribute.setValue(_newAttribute);                  
            }
                                    
        }
            
    }
}
