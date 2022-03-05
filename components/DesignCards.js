import React from 'react'
import styled from 'styled-components'
import DesignCard from './DesignCard'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 90px;
`

const DesignCards = ({ designs }) => {

  return (
    <Container>
      {designs.map((design) => (
        <DesignCard design={design} />
      ))}
    </Container>
  )
}

export default DesignCards