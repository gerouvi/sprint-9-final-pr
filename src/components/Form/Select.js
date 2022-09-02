const Select = ({ className, children, ...props }) => (
  <select className={className} {...props}>
    {children}
  </select>
);

export default Select;
