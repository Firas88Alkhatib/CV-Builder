
interface ButtonProps {
  label: string;
  onClick?: (e:any) =>  void;
  
}
const Button = ({  label, onClick }: ButtonProps) => {
  return (
    
        <div className="button" onClick={onClick && onClick}>
          <span>{label}</span>
        </div>
  );
};


export default Button;