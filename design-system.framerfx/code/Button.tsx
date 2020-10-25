import * as React from "react"
import * as System from "ds-lib"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerButton = props => {
    return <System.Button {...props}></System.Button>
}

export const Button = withHOC(InnerButton)

Button.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    width: {
        title: "Width",
        type: ControlType.String,
    },
    height: {
        title: "Height",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    colorLightPrimary: {
        title: "Color light primary",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    colorLightSecondary: {
        title: "Color light secondary",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    type: {
        title: "Type",
        type: ControlType.Enum,
        options: ["color", "white", "outline", "none"],
        optionTitles: ["color", "white", "outline", "none"],
    },
    secondary: {
        title: "Secondary",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["small", "medium", "large"],
        optionTitles: ["small", "medium", "large"],
    },
    withIcon: {
        title: "With icon",
        type: ControlType.Enum,
        options: ["before", "after"],
        optionTitles: ["before", "after"],
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
    },
    colorPrimary: {
        title: "Color primary",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    colorSecondary: {
        title: "Color secondary",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    flex: {
        title: "Flex",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
