import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: .25rem;
    border: 1px solid var(--green);
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: .5s ease-out;
    
    &:hover {
      background: #fff;
      color: var(--green);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 4rem;
  border: 1px solid;
  border-color: #d7d7d7;
  border-radius: .25rem;

  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor]) 
    : 'transparent'
  };
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color .8 ease;

  &.income {
    border-color: var(--green);
    
    span {
      color: var(--green);
    }
  }
  
  &.outcome {
    border-color: var(--red);

    span {
      color:var(--red);  
    }
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-flex;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
    transition: .3s ease-out;
  }
`