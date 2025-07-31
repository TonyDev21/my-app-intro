interface ButtonProps {
  label: string;
  handleClick: () => void;
  disabled: boolean;
  width?: string;
}

const Button = ({ label, handleClick , disabled,width}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${width}  p-2 rounded-3xl text-xl md:text-lg lg:px-0 lg:text-base ${disabled ?'bg-gray-400 cursor-not-allowed': 'bg-black cursor-pointer text-white hover:scale-105'} transition-transform duration-200 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default Button;
