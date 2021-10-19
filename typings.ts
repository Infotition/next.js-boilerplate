// @ts-ignore

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare namespace Cypress {
  interface Chainable {
    getElement(id: string): Chainable<Element>;
  }
}
