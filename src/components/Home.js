import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                discription="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels"
                discription="Money-Back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn now"
            />
            <Section
                title="Solar for New Roofs"
                discription="Solar Roof Costs Less Than a New Roof Plus Solar Planel"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn now"
            />
            <Section
                title="Accessories"
                discription=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                rightBtnText=""
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    
`;

export default Home
