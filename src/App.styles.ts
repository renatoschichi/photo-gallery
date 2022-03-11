import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(88, 2, 122);
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: 500;
`;

export const ScreenWarning = styled.div`
    text-align: center;
    
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: rgb(8, 33, 46);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: rgb(4, 91, 190);
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;