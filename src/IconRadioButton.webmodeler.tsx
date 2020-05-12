import { Component, ReactNode, createElement } from "react";
import { IconRadioButtonPreviewProps } from "../typings/IconRadioButtonProps";
import { Icon, GlyphIcon} from "mendix/components/web/Icon";

declare function require(name: string): string;

export class preview extends Component<IconRadioButtonPreviewProps> {
    render(): ReactNode {
        
        //Declare icons being used
        const _shoppingCart : GlyphIcon ={
        type:"glyph",
        iconClass: "shopping-cart"
        };
        
        const _gift : GlyphIcon ={
        type:"glyph",
        iconClass: "gift"
        };
    
        return <div className="icon-radiobutton">            
            <div data-key="Test1" className="card selected">
                <Icon icon={_shoppingCart}/>
                <label>Buy</label>
            </div>     
            <div data-key="Test2" className="card">
                <Icon icon={_gift}/>
                <label>Gift</label>
            </div> 
        </div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/IconRadioButton.css");
}
