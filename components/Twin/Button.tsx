import tw, { styled, css, theme } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The common button styles added with the tw import
  tw`px-xSmall py-xxxSmall rounded-circle focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-aux-pYellow-100)`,

  // Use props to conditionally style your components
  variant === "primary" && tw`bg-n-100 text-n-white border-n-100`,

  // Combine regular css with tailwind classes within backticks
  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-khaki-100`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-small` : tw`text-large`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.n.white`};
  `,
]);

export default Button;
