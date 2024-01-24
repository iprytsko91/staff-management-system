export const generateToken = () => {
  return Math.random().toString(16).substring(2);
}
