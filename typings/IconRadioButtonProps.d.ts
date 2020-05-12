/**
 * This file was generated from IconRadioButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { DynamicValue, EditableValue, WebIcon } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export interface IconMappingType {
    enumValue: string;
    enumIcon: DynamicValue<WebIcon>;
}

export type ButtonSizeEnum = "fitContent" | "flex" | "fixed";

export interface IconMappingPreviewType {
    enumValue: string;
    enumIcon: WebIcon;
}

export interface IconMappingVisibilityType {
    enumValue: boolean;
    enumIcon: boolean;
}

export interface IconRadioButtonContainerProps extends CommonProps {
    radioAttribute: EditableValue<string>;
    iconMapping: IconMappingType[];
    displayCaption: boolean;
    buttonSize: ButtonSizeEnum;
    width: number;
    height: number;
}

export interface IconRadioButtonPreviewProps {
    class: string;
    style: string;
    styleObject: CSSProperties;
    radioAttribute: string;
    iconMapping: IconMappingPreviewType[];
    displayCaption: boolean;
    buttonSize: ButtonSizeEnum;
    width: number;
    height: number;
}

export interface VisibilityMap {
    radioAttribute: boolean;
    iconMapping: IconMappingVisibilityType[] | boolean;
    displayCaption: boolean;
    buttonSize: boolean;
    width: boolean;
    height: boolean;
}
