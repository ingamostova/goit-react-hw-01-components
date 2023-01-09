import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;
height: 700px;
border-radius: 5px;
background-color: lightgrey;
`

export const Description = styled.div`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ProfileStats = styled.ul`
display: flex;
gap: 10px;
`

export const ProfileAvatar = styled.img`
display: block;
width: 320px;
`

export const Name = styled.p`
font-size: 25px;
font-family: sans-serif;
font-weight: bold;
`
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`

export const Quantity = styled.span`
color: black;
font-size: 16px;
font-weight: bold;
`