import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import StyledButton from '../reusables/Button';

const DisplayDictionary = () => {
  const ctx = useContext(DictionaryContext);

  useEffect(() => {
    ctx.setsessionStorage();
  }, []);

  return (
    <>
      <ul>
        {!ctx.localDictionary ? (
          <p>{ctx.currentState}</p>
        ) : (
          ctx.localDictionary.map((item) => <li key={item.id}>{item.id}</li>)
        )}
      </ul>
    </>
  );
};

export default DisplayDictionary;
