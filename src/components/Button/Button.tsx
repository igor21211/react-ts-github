import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit";
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick, type = "button" }: ButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);
