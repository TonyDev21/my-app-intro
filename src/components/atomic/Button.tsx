interface ButtonProps {
  label: string;
  handleClick: () => void;
  disabled: boolean;
}

const Button = ({ label, handleClick , disabled}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`w-2/5  p-2 rounded-3xl text-xl md:text-lg lg:px-0 lg:text-base ${disabled ?'bg-gray-400 cursor-not-allowed': 'bg-black cursor-pointer text-white'}  `}
    >
      {label}
    </button>
  );
};

export default Button;
