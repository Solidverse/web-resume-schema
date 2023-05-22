export const useColorCodeValidator = () => {
  function validateColorCode(colorCode: string): boolean {
    const colorRegex = /^#([0-9a-fA-F]{3}){1,2}$/; // Regular expression to match the color code pattern

    return colorRegex.test(colorCode);
  }

  return { validateColorCode };
};
