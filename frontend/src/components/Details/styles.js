import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;

    display: flex;
    flex-direction: column;
`;

export const Name = styled.h1`
    font-size: 25px;
    color: #616161;
    text-align: center;
    padding: 10px 20px;
    background-color: #a4a4a4;
`;

export const Attribute = styled.h2`
    font-size: 20px;
    text-align: center;
    color: #616161;
    font-weigth: bold;
    padding: 5px;
`;

export const Label = styled.div`
    background-color: #a4a4a4;
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const List = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
`;

export const BodyMoves = styled.div`
    padding 5px;
    margin: 10px;
    border-radius: 4px;
    max-width: 150px;
    width: 150px;
    background-color: #DA471B;
    font-weight: bold;
    font-size: 12px;
    color: #ffffff
    text-align: center;
`;

