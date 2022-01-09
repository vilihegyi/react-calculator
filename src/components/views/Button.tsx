import React from 'react';
import styled from 'styled-components';
import ButtonProps from '../interfaces/ButtonProps';

export enum ButtonColor {
    DarkLiver = "#505050",
    EerieBlack = "#1C1C1C",
    LightGray = "#D4D4D2",
    VividGamboge = "#FF9500"
};

const StyledButton = styled.button`
    color: #fff;
    background-color: #505050;
    border: none;
    border-radius: 64px;
    font-size: 24px;
`;

const Button = (props: ButtonProps) => {
    const styles: React.CSSProperties = {};

    if (props.position) {
        styles.gridColumnStart = props.position[0] + 1;
        styles.gridRowStart = props.position[1] + 1;
    }

    if (props.width) {
        styles.gridColumnEnd = `span ${props.width}`;
    }

    if (props.color) {
        if (props.color === ButtonColor.DarkLiver) {
            styles.color = "#fff";
            styles.background = ButtonColor.DarkLiver;
        } else if (props.color === ButtonColor.LightGray) {
            styles.color = "#000";
            styles.background = ButtonColor.LightGray;
        } else if (props.color === ButtonColor.VividGamboge) {
            styles.color = "#fff";
            styles.background = ButtonColor.VividGamboge;
        }
    }

    return <StyledButton style={styles}> {props.label}</StyledButton>;
}

export default Button;