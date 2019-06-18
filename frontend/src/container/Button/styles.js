import styled from 'styled-components';
import Utils from '../../commons/Utils';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Btn = styled.button`
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: ${ props => Utils.backColorButton(props.action)};
    border-radius: 4px;
    border-style: solid;
    border-width: thin;
`;