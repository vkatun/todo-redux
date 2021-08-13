import React, { useState, useEffect } from 'react';
import { Control } from './components/Control/Control';
import { List } from './components/List/List';
import { AppWrapper } from './styled';


export const App = () => {
  return (
    <AppWrapper>
      <Control/>
      <List/>
    </AppWrapper>
  );
};
export default App;
