import styled from 'styled-components'

export const Nav = styled.section`
  padding: 5px;
`;

export const NavItem = styled.section`
    padding: 5px 15px;
    font-size: 25px;
    border-bottom: 1px solid;
    border-color: gray;
    color: ${props => props.selected ? "white" : "rgba(235, 235, 235, 0.87)"}; 
    text-align: center;
    cursor: default;
    box-shadow: ${props => props.selected ? " 1px 0px 2px 4px rgba(247, 247, 247, 0.2)" : "none"}; 
    margin: 1px 0px;
    
    &:hover {
        box-shadow: 1px 0px 2px 4px rgba(247, 247, 247, 0.2);
        transition: box-shadow 0.3s ease-in-out;
        color: white;
    }
`;
