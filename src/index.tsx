import React from 'react';
import Loaders from './Components/Loaders';
import './style.scss';

interface IWhen {
  isTrue: boolean;
  children: React.ReactNode;
}
const When = ({ isTrue, children }: IWhen): JSX.Element => {
  if (!isTrue) return <></>;
  return <>{children}</>;
};

const removeProps = (props: IButtonProps, ...args: Array<keyof IButtonProps>): IButtonProps => {
  const newProps = { ...props };
  args.forEach((arg: keyof IButtonProps) => {
    delete newProps[arg];
  });
  return newProps;
};

const classes = (...args: string[]): string => args.join(' ').trim();

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonType?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'glass';
  className?: string;
  loader?:
    | 'spinner'
    | 'circle-notch'
    | 'three-dots'
    | 'ball-triangle'
    | 'bars'
    | 'filling-box'
    | 'puff'
    | 'half-circles'
    | 'circular-stripes';
}

const Button: React.FC<IButtonProps> = function (props): JSX.Element {
  const {
    children,
    disabled,
    loading = false,
    buttonType = 'primary',
    className = '',
    loader = 'spinner'
  } = props;

  const buttonProps = removeProps(
    props,
    'children',
    'disabled',
    'loading',
    'buttonType',
    'className',
    'loader'
  );

  return (
    <button
      disabled={disabled || loading}
      className={classes(buttonType, className)}
      {...buttonProps}
    >
      <When isTrue={loading}>
        <span>
          <Loaders loader={loader} />
        </span>
      </When>
      <span>{children}</span>
    </button>
  );
};

export default Button;
