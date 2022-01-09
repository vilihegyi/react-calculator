import React from 'react';
import styled from 'styled-components';
import Button, { ButtonColor } from './Button';

const Container = styled.div`
`;

const Display = styled.div`
    background: #000;
    color: #fff;
    border-radius: 64px;
    font-size: 48px;
    grid-column-end: span 4;
    padding: 16px 24px;
    text-align: right;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(6, 80px);
`;

const Calculator = () => {
    return (
        <Container>
            <Grid>
                <Display>42</Display>
                <Button color={ButtonColor.LightGray} label="AC" position={[0, 1]} />
                <Button color={ButtonColor.LightGray} label="+/-" position={[1, 1]} />
                <Button color={ButtonColor.LightGray} label="%" position={[2, 1]} />
                <Button color={ButtonColor.VividGamboge} label="/" position={[3, 1]} />
                <Button color={ButtonColor.DarkLiver} label="7" position={[0, 2]} />
                <Button color={ButtonColor.DarkLiver} label="8" position={[1, 2]} />
                <Button color={ButtonColor.DarkLiver} label="9" position={[2, 2]} />
                <Button color={ButtonColor.VividGamboge} label="x" position={[3, 2]} />
                <Button color={ButtonColor.DarkLiver} label="4" position={[0, 3]} />
                <Button color={ButtonColor.DarkLiver} label="5" position={[1, 3]} />
                <Button color={ButtonColor.DarkLiver} label="6" position={[2, 3]} />
                <Button color={ButtonColor.VividGamboge} label="-" position={[3, 3]} />
                <Button color={ButtonColor.DarkLiver} label="1" position={[0, 4]} />
                <Button color={ButtonColor.DarkLiver} label="2" position={[1, 4]} />
                <Button color={ButtonColor.DarkLiver} label="3" position={[2, 4]} />
                <Button color={ButtonColor.VividGamboge} label="+" position={[3, 4]} />
                <Button color={ButtonColor.DarkLiver} label="0" position={[0, 5]} width={2}/>
                <Button color={ButtonColor.DarkLiver} label="," position={[2, 5]} />
                <Button color={ButtonColor.VividGamboge} label="=" position={[3, 5]} />
            </Grid>
        </Container>
    );
}

export default Calculator;