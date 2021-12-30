import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../index';

describe('Button: Component Basis tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with text and className', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button className="test-class">Hello World</Button>, div);
    const btn = div.querySelector('button');
    expect(btn.textContent).toBe('Hello World');
    expect(btn.classList.contains('test-class')).toBe(true);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with onClick', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button
        className="test-class"
        onClick={(e) => {
          e.target.textContent = 'Test';
        }}
      >
        Hello World
      </Button>,
      div,
    );
    const btn = div.querySelector('button');
    expect(btn.textContent).toBe('Hello World');
    btn.click();
    expect(btn.textContent).toBe('Test');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('disabled with passing loading props true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loader when loading prop is true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="circle-notch"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with buttonType prop value', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonType="danger" />, div);
    const btn = div.querySelector('button');
    console.log(btn.classList);
    expect(btn.classList.contains('danger')).toBe(true);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value circle-notch', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="circle-notch" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="circle-notch"]'));
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with loader prop value puff', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="puff" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="puff"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value spinner', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="spinner" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="spinner"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value circular-stripes', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="circular-stripes" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="circular-stripes"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value ball-triangle', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="ball-triangle" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="ball-triangle"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value bars', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="bars" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="bars"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value filling-box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="filling-box" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="filling-box"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value half-circles', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="half-circles" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="half-circles"]'));
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value three-dots', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loader="three-dots" loading={true} />, div);
    const btn = div.querySelector('button');
    expect(btn.getAttribute('disabled'));
    expect(div.querySelector('svg[data-icon="three-dots"]'));
    ReactDOM.unmountComponentAtNode(div);
  });
});
