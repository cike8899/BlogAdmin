// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6ad4abd29dc4be75d805580c3e1a01eb46048d9e/react-fontawesome/react-fontawesome.d.ts
declare module "react-fontawesome" {

  //Import react
  import React = require('react');

  type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';

  interface FontAwesomeProps {

    border?: boolean,
    className?: string,
    fixedWidth?: boolean,
    flip?: boolean,
    inverse?: boolean
    name: string,
    pulse?: boolean,
    rotate?: number,
    size?: FontAwesomeSize,
    spin?: boolean,
    stack?: string,
    style?: React.CSSProperties
  }

  class FontAwesome extends React.Component<FontAwesomeProps, {}> {}

  export = FontAwesome;
}
