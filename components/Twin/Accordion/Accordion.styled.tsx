import tw, { styled, css, theme } from "twin.macro";

interface AccordionProps {
  disabled?: boolean;
  isActive?: boolean;
}


export const StyledAccordionWrapper = styled.div(
  ({ disabled = false, isActive }: AccordionProps) => [
    tw`m-zero px-xxSmall flex flex-col`,
    css`
      &:first-child {
        margin-bottom: ${() =>
          isActive ? '15px' : '0'};
      }
      &:not(:first-child) {
        margin: ${() => (isActive ? '15px 0' : '0')};
      }
    `,
  ]
);

export const StyledAccordionHeading = styled.div(({ disabled = false }: AccordionProps) => [
    tw`flex flex-row justify-between cursor-pointer p-large bg-n-30`,
    disabled && tw`bg-pr-180 cursor-not-allowed`,
  ]);

export const StyledAccordionContent = tw.div`p-medium border-solid border-n-white border border-t-0`;

