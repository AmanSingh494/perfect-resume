import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const MultipleInputsHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const MultipleInputsContainer = styled.div`
  position: absolute;
  top: -2vh;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  flex-direction: column;
  padding: 10px;
  border: 2px solid var(--color-primary);
  border-radius: 11px;
  gap: 10px;
  transition: all 0.3s linear;
  background: white;
  z-index: -1;
  @media (max-width: 768px) {
    /* position: relative; */
  }
`
const StyledButton = styled(Button)`
  && {
    background: var(--color-tertiary);
    color: white;
    &:hover {
      background: var(--color-quaternary);
    }
  }
`
const DeleteBtn = styled.span`
  background: var(--color-primary);
  color: white;
  border-radius: 33px;
  padding: 7px;
  border: 2px solid var(--color-primary);
  transition: all 0.5s linear;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: var(--color-primary);
  }
  @media (max-width: 768px) {
  }
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const MultipleInputsHeading = styled.h2``
const CrossBtn = styled.span`
  color: var(--color-primary);
  cursor: pointer;
`
const ExperiencesInput = ({
  index,
  stateName,
  stateChanger,
  deleteFn,
  addFn
}) => {
  //stateChnager here is experience changer
  const dispatch = useDispatch()
  const experiences = useSelector((state) => state[stateName][index].exp)
  const MultipleInputsContainerRef = useRef(null)
  const TextFieldRef = useRef(null)
  const label = 'Experience'
  // const [experiences, setExperiences] = useState([])
  const [inputCount, setInputCount] = useState(1)
  return (
    <InputContainer>
      <TextField
        ref={TextFieldRef}
        label={label}
        name='exp'
        key={`exp-${index}`}
        value={experiences[0] || ''}
        onClick={() => {
          if (MultipleInputsContainerRef.current && TextFieldRef.current) {
            MultipleInputsContainerRef.current.style.opacity = 1
            MultipleInputsContainerRef.current.style.position = 'relative'
            MultipleInputsContainerRef.current.style.zIndex = 100
            TextFieldRef.current.style.display = 'none'
          }
        }}
        style={{ width: '200px' }}
      />
      <MultipleInputsContainer ref={MultipleInputsContainerRef}>
        <MultipleInputsHeadingContainer>
          <MultipleInputsHeading>
            Fill Multiple Experiences here
          </MultipleInputsHeading>{' '}
          <CrossBtn
            className='material-symbols-outlined'
            onClick={() => {
              if (MultipleInputsContainerRef.current && TextFieldRef.current) {
                MultipleInputsContainerRef.current.style.opacity = 0
                MultipleInputsContainerRef.current.style.zIndex = -1
                setTimeout(() => {
                  TextFieldRef.current.style.display = 'block'
                  MultipleInputsContainerRef.current.style.position = 'absolute'
                }, 300)
              }
            }}
          >
            close
          </CrossBtn>
        </MultipleInputsHeadingContainer>
        {Array.from({ length: inputCount }, (_, i) => (
          <FlexRow key={`multiple-exp-${i}`}>
            <TextField
              label={label}
              name='exp'
              value={experiences[i] || ''}
              onChange={(e) => {
                dispatch(
                  stateChanger({
                    index,
                    expIndex: i,
                    value: e.target.value
                  })
                )
              }}
              style={{ width: '200px' }}
            />
            <DeleteBtn
              className='material-symbols-outlined'
              onClick={() => {
                setInputCount((prev) => prev - 1)
                deleteFn(index, i)
              }}
            >
              delete
            </DeleteBtn>
          </FlexRow>
        ))}
        <StyledButton
          onClick={() => {
            setInputCount((prev) => prev + 1)
            addFn(index)
          }}
        >
          Add Input
        </StyledButton>
      </MultipleInputsContainer>
    </InputContainer>
  )
}

export default ExperiencesInput
