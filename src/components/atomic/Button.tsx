interface ButtonProps {
  label: string;
  handleClick: () => void;
}

const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="className='w-2/5 bg-black p-2 rounded-3xl text-white cursor-pointer text-xl md:text-lg lg:px-0 lg:text-base'"
    >
      {label}
    </button>
  );
};

export default Button;
