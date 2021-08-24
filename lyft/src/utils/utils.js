const colors = {
    purple: '#8B37FF',
    white: '#FFFFFF'
  };
  
  export const purpleColor = colors.purple;
  export const primaryColor = colors.white;
 
  
  export const getButtonColor = ({ buttonColor }) =>
    buttonColor ? buttonColor : purpleColor;