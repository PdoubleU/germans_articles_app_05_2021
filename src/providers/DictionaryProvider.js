import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getNounsAPI from '../api/getNounsAPI';
import addNounAPI from '../api/addNounAPI';
import isNounInDictionaryAPI from '../api/isNounInDictionaryAPI';
import {
  useFiniteStateMachine,
  setOfActions,
} from '../hooks/useFiniteStateMachine';

export const DictionaryContext = React.createContext({
  addData: () => {},
  setSessionStorage: () => {},
  localDictionary: [],
  currentState: '',
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState();
  const [currentState, updateState] = useFiniteStateMachine();

  const { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } = setOfActions;
  const storageItemName = 'german_articles_dict';

  console.log('rerender dictionary provider');

  const addData = (props) => {
    updateState(FETCH_DATA); // isLoading
    isNounInDictionaryAPI(props).then((response) => {
      if (response) return updateState(FETCH_DATA_ERROR); // isError
      addNounAPI(props).then((response) => {
        response
          ? updateState(FETCH_DATA_SUCCESS) // hasLoaded
          : updateState(FETCH_DATA_ERROR); // hasError
      });
    });
  };

  const setSessionStorage = () => {
    updateState(FETCH_DATA); // isLoading
    if (!window.localStorage.getItem(storageItemName)) {
      getNounsAPI()
        .then((response) => {
          window.sessionStorage.setItem(
            storageItemName,
            JSON.stringify(response)
          );
          updateState(FETCH_DATA_SUCCESS); // hasLoaded
          return setLocalDictionary(
            JSON.parse(window.sessionStorage.getItem(storageItemName))
          );
        })
        .catch((e) => {
          updateState(FETCH_DATA_ERROR); // hasError
          console.error(e);
          return;
        });
    } else {
      updateState(FETCH_DATA_SUCCESS); // hasLoaded
      return setLocalDictionary(
        JSON.parse(window.sessionStorage.getItem(storageItemName))
      );
    }
  };

  return (
    <DictionaryContext.Provider
      value={{ addData, setSessionStorage, localDictionary, currentState }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
