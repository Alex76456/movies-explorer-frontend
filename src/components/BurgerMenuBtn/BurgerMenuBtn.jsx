import React from 'react';
import './BurgerMenuBtn.css';
import { Route, Switch } from 'react-router-dom';

function BurgerMenuBtn({ handleClick }) {
  return (
    <Switch>
      <Route exact path="/">
        <button className="menu-btn menu-btn_type_promo" onClick={handleClick} />
      </Route>
      <Route path="/*">
        <button className="menu-btn" onClick={handleClick} />
      </Route>
    </Switch>
  );
}

export default BurgerMenuBtn;
