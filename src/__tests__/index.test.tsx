import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../';

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

describe('Button: Component Basis tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Test</Button>, div);
    expect(div).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with text and className', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button className="test-class">Hello World</Button>, div);
    const btn = div.querySelector('button');
    expect(btn && btn.textContent).toBe('Hello World');
    expect(btn && btn.classList.contains('test-class')).toBe(true);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with onClick', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button
        className="test-class"
        onClick={(e): void => {
          const btn = e.target as HTMLButtonElement;
          btn.innerText = 'Test';
        }}
      >
        Hello World
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    expect(btn && btn.textContent).toBe('Hello World');
    btn && btn.click();
    expect(btn && btn.innerText).toBe('Test');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('disabled with passing loading props true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loading={true}>Test</Button>, div);
    const btn = div.querySelector('button');
    expect(btn).toBeDisabled();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders loader when loading prop is true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button loading={true}>Test</Button>, div);
    const btn = div.querySelector('button');
    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="spinner"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with buttonType prop value', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonType="danger">Test</Button>, div);
    const btn = div.querySelector('button');
    expect(btn && btn.classList.contains('danger')).toBe(true);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value circle-notch', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="circle-notch" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    expect(btn).toBeDisabled();
    await delay(50);
    expect(div.querySelector('svg[data-icon="circle-notch"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value puff', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="puff" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);
    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="puff"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value spinner', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="spinner" loading={true}>
        test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);
    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="spinner"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value circular-stripes', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="circular-stripes" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="circular-stripes"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value ball-triangle', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="ball-triangle" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="ball-triangle"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value bars', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="bars" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="bars"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value filling-box', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="filling-box" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="filling-box"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value half-circles', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="half-circles" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="half-circles"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with loader prop value three-dots', async () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button loader="three-dots" loading={true}>
        Test
      </Button>,
      div
    );
    const btn = div.querySelector('button');
    await delay(50);

    expect(btn).toBeDisabled();
    expect(div.querySelector('svg[data-icon="three-dots"]')).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });
});
