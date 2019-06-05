import styled from 'styled-components';
import Utils from "../../commons/Utils";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const Span = styled.div`
    border-radius: 5px;
    line-height: 18px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
    padding: 0 15px;
    background-color: ${props => Utils.foundLabelColor(props.type.name)}
`;
export const Nome = styled.p`
    color: white;
    font-size: 11px;
`;