export default function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  const styles = { primary: 'btn-primary', secondary: 'btn-secondary', soft: 'btn-soft' }
  return <button type={type} className={`${styles[variant]} ${className}`} {...props}>{children}</button>
}
