/*import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utilities/constants'

export default function ProductSelection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOnClick = (index) => {
    setActiveIndex(index)
  }

  const ProductThumbs = products.map((product, index) => (
    <div
      key={index}
      onClick={() => handleOnClick(index)}
      className={activeIndex === index ? 'active' : ''}
    >
      <img src={`images/products/${product.filename}-thumb.jpg`} alt='' />
      <span>{product.color}</span>
    </div>
  ))

  return (
    <StyledWrapper>
      <Title>
        <h3>1. Choose a fabric</h3>
        <p>Choose your choice from fabrics to leather.</p>
      </Title>

      <h4>Fabric Choices</h4>

      <Selection>{ProductThumbs}</Selection>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 25px 0;
  border-top: 2px solid #fff;

  h4 {
    margin: 35px 0 10px;
    font-weight: 700;
  }
`

const Title = styled.div`
  h3 {
    text-transform: uppercase;
    font-family: var(--font-family-brand);
    font-size: 16px;
    color: var(--color-brand-blue-dark);
  }
`

const Selection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 10px;

  @media ${breakpoints.large} {
    grid-gap: 15px;
  }

  div {
    text-align: center;
    border-radius: 6px;
    border: 2px solid var(--color-background);
    background: var(--color-base-light);
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    img {
      width: 100%;
      padding: 30px 10px;
      background: var(--color-background);

      @media ${breakpoints.small} {
        padding: 20px 10px;
      }

      @media ${breakpoints.medium} {
        padding: 30px 10px;
      }
    }

    span {
      display: block;
      padding: 12px 5px;
      font-size: 14px;
      line-height: 1.2;
    }

    &.active {
      border: 2px solid var(--color-brand-blue);
      background: var(--color-brand-blue);

      img {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      span {
        color: #fff;
      }
    }
  }
`
*/
